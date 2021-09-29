import { createContext, useCallback, useEffect, useState } from 'react';

import { auth } from '../services';

import { User } from '../@types';
import { DefaultProviderProps } from './default-provider-props';
import { useToast } from '../hooks';

enum localStorageKeys {
  user = 'contacts.user',
}

enum codeErrors {
  email_already_exists = 'auth/email-already-exists',
  user_not_found = 'auth/user-not-found',
  wrong_password = 'auth/wrong-password',
}

interface AuthContextData {
  user: User | null;
  signOut: () => Promise<void>;
  sendResetPasswordEmail: (email: string) => Promise<void>;
  signInWithEmailAndPassword: (
    email: string,
    password: string,
  ) => Promise<void>;
  createUserWithEmailAndPassword: (
    email: string,
    password: string,
    displayName: string,
  ) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as any);

export const AuthProvider = ({ children }: DefaultProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const localStorageUser = localStorage.getItem(localStorageKeys.user);

    if (localStorageUser) {
      const obj = JSON.parse(localStorageUser);

      return obj;
    }

    return null;
  });

  const { toast } = useToast();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        const { uid, displayName, email, photoURL, emailVerified } =
          currentUser as any;
        setUser({
          id: uid,
          displayName,
          email,
          photoURL,
          isEmailVerified: emailVerified,
        });
      } else {
        setUser(null);
      }
    });

    return () => unSub();
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(localStorageKeys.user, JSON.stringify(user));
    }
  }, [user]);

  const signOut = useCallback(async () => {
    localStorage.removeItem(localStorageKeys.user);
    await auth.signOut();
  }, []);

  const createUserWithEmailAndPassword = useCallback(
    async (email: string, password: string, displayName: string) => {
      try {
        const resp = await auth.createUserWithEmailAndPassword(email, password);
        if (resp.user) {
          await resp.user.updateProfile({
            displayName,
          });

          await resp.user.sendEmailVerification();
        }
      } catch (err: any) {
        switch (err.code) {
          case codeErrors.email_already_exists: {
            toast({
              title: 'Authentication',
              description: 'This email address is already in use.',
              status: 'error',
            });
            break;
          }
          default: {
            toast({
              title: 'Authentication',
              description: 'A unexpected error occurred, try again later.',
              status: 'error',
            });
          }
        }
      }
    },
    [toast],
  );

  const signInWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      try {
        const resp = await auth.signInWithEmailAndPassword(email, password);

        if (resp.user) {
          if (!resp.user.emailVerified) {
            await signOut();

            toast({
              title: 'Authentication',
              description: 'Your must verify your email to sign in',
              status: 'error',
            });
          }
        }
      } catch (err: any) {
        switch (err.code) {
          case codeErrors.user_not_found: {
            toast({
              title: 'Authentication',
              description: 'Email or password invalid.',
              status: 'error',
            });
            break;
          }

          case codeErrors.wrong_password: {
            toast({
              title: 'Authentication',
              description: 'Email or password invalid.',
              status: 'error',
            });
            break;
          }

          default: {
            toast({
              title: 'Authentication',
              description: 'A unexpected error occurred, try again later.',
              status: 'error',
            });
          }
        }
      }
    },
    [signOut, toast],
  );

  const sendResetPasswordEmail = useCallback(
    async (email: string) => {
      try {
        await auth.sendPasswordResetEmail(email);

        toast({
          title: 'Reset password email',
          description: 'The email has been send for your email box',
        });
      } catch (err: any) {
        switch (err.code) {
          case codeErrors.user_not_found: {
            toast({
              title: 'Reset password email',
              description: 'No users found for this email',
              status: 'error',
            });
            break;
          }

          default: {
            toast({
              title: 'Reset password email',
              description: 'A error occurred , please try again',
              status: 'error',
            });
          }
        }
      }
    },
    [toast],
  );

  
  return (
    <AuthContext.Provider
      value={{
        user,
        signOut,
        sendResetPasswordEmail,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
