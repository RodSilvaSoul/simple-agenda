import firebase from 'firebase';
import {
  createContext,
  Dispatch,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from 'react';

import { v4 as uuidV4 } from 'uuid';

import {
  initialState,
  contactsReducer,
  ContactsAction,
  ContactsState,
} from '../reduces/contacts-manager';

import { ContactOnState, ContactOnDataBase } from '../@types';
import { useAuthContext, useToast } from '../hooks';
import { DefaultProviderProps } from './default-provider-props';
import { db, storage } from '../services';

enum collections {
  users = 'users',
  contacts = 'contacts',
}

type AddContactPrams = {
  contactAvatar: File | null;
} & Omit<
  ContactOnDataBase,
  | 'id'
  | 'avatarUrl'
  | 'isChecked'
  | 'isFavorite'
  | 'isOnTrash'
  | 'deletedAt'
  | 'createdAt'
>;

type UpdateContactParams = {
  avatarFile: File | null;
} & Partial<Omit<ContactOnDataBase, 'id' | 'avatarUrl'>>;

interface ContactsManagerContextData {
  state: ContactsState;
  dispatch: Dispatch<ContactsAction>;
  clearTrash: () => Promise<void>;
  addContact: (data: AddContactPrams) => Promise<void>;
  updateContact: (id: string, data: UpdateContactParams) => Promise<void>;
  restoreContacts: () => Promise<void>;
  deletePermanently: () => Promise<void>;
  moveContactToTrash: (id: string) => Promise<void>;
  findAContactOnState: (id: string) => ContactOnState | null;
  toggleContactFavorite: (id: string) => Promise<void>;
  verifyIfExitsAContactByName: (name: string) => boolean;
  moveAllContactCheckedToTrash: () => Promise<void>;
}

export const ContactsManagerContext = createContext<ContactsManagerContextData>(
  {} as any,
);

export const ContactsManagerProvider = ({ children }: DefaultProviderProps) => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  const { user } = useAuthContext();

  const dbRef = useRef<firebase.firestore.CollectionReference | null>(null);

  const storageRef = useRef<firebase.storage.Reference | null>(null);

  const { toast } = useToast();

  const getStorageRef = useCallback(() => {
    if (storageRef.current === null) {
      storageRef.current = storage
        .ref()
        .child(user?.id as string)
        .child(collections.contacts);

      return storageRef.current;
    }

    return storageRef.current;
  }, [user?.id]);

  const getDbRef = useCallback(() => {
    if (dbRef.current === null) {
      dbRef.current = db
        .collection(collections.users)
        .doc(user?.id)
        .collection(collections.contacts);
      return dbRef.current;
    }

    return dbRef.current;
  }, [user?.id]);

  useEffect(() => {
    if (user) {
      dispatch({
        type: 'set_is_loading_true',
      });

      const unSub = getDbRef().onSnapshot((snapshot) => {
        if (snapshot.empty) {
          dispatch({
            type: 'load-contacts',
            payload: [],
          });
        }

        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          isChecked: false,
        })) as unknown as ContactOnDataBase[];

        dispatch({
          type: 'load-contacts',
          payload: docs,
        });
      });

      return () => unSub();
    }
  }, [getDbRef, user]);

  const findAContactOnState = useCallback(
    (id: string | number) => {
      const contact = state.contacts.find((contact) => contact.id === id);

      if (contact) {
        return contact;
      }

      return null;
    },
    [state.contacts],
  );

  const addContact = useCallback(
    async ({ contactAvatar, ...rest }: AddContactPrams) => {
      const id = uuidV4();

      let avatarUrl: string | null = null;

      try {
        if (contactAvatar) {
          const { ref } = await getStorageRef().child(id).put(contactAvatar);

          avatarUrl = await ref.getDownloadURL();
        }

        await getDbRef()
          .doc(id)
          .set({
            ...rest,
            id,
            avatarUrl,
            isFavorite: false,
            isOnTrash: false,
            createdAt: new Date().getTime(),
          });

        toast({
          title: 'Contact',
          description: 'Contact added successfully ',
        });
      } catch {
        toast({
          title: 'Contact',
          description: 'A unexpected error occurred, try again later',
          status: 'error',
        });
      }
    },
    [getDbRef, getStorageRef, toast],
  );

  const updateContact = useCallback(
    async (id: string, { avatarFile = null, ...rest }: UpdateContactParams) => {
      try {
        let photoUrl: string | null = null;

        if (avatarFile) {
          const contact = findAContactOnState(id);

          if (contact?.avatarUrl) {
            await getStorageRef().child(id).delete();
          }

          const { ref } = await getStorageRef().child(id).put(avatarFile);

          photoUrl = await ref.getDownloadURL();
        }

        await getDbRef()
          .doc(id)
          .update({ ...rest, photoUrl });

        toast({
          title: 'Edit Contact',
          description: 'Your Contact has been updated',
        });
      } catch {
        toast({
          title: 'Edit Contact',
          description: 'Error on edit contact, try again',
          status: 'error',
        });
      }
    },
    [findAContactOnState, getDbRef, getStorageRef, toast],
  );

  const verifyIfExitsAContactByName = useCallback(
    (name: string) => {
      const { contacts } = state;

      const result = contacts.find(({ firstName, lastName }) => {
        const fullName = (firstName + ' ' + lastName).toLowerCase();

        return fullName === name.toLowerCase();
      });

      return Boolean(result);
    },
    [state],
  );

  const toggleContactFavorite = useCallback(
    async (id: string) => {
      const contact = findAContactOnState(id);

      try {
        if (contact) {
          await getDbRef().doc(id).update({
            isFavorite: !contact.isFavorite,
          });
        }
      } catch {
        toast({
          title: 'Contact',
          description: 'Error on make contact favorite, try again.',
          status: 'error',
        });
      }
    },
    [findAContactOnState, getDbRef, toast],
  );

  const moveContactToTrash = useCallback(
    async (id: string) => {
      try {
        await getDbRef().doc(id).update({
          isOnTrash: true,
          deletedAt: new Date().getTime(),
        });

        toast({
          title: 'Trash',
          description: 'The contact as been moved to trash successfully',
        });
      } catch {
        toast({
          title: 'Trash',
          description: 'Error on move this contacts to trash, try again.',
          status: 'error',
        });
      }
    },
    [getDbRef, toast],
  );

  const moveAllContactCheckedToTrash = useCallback(async () => {
    const contactsChecked = state.contacts.filter(
      (contact) => contact.isChecked,
    );

    try {
      toast({
        title: 'Trash',
        description: 'Start to move all contacts to trash',
        status: 'info',
      });

      for (const { id } of contactsChecked) {
        await getDbRef().doc(id).update({
          isOnTrash: true,
          deletedAt: new Date().getTime(),
        });
      }

      toast({
        title: 'Trash',
        description: 'All contacts have been moved successfully',
      });
    } catch {
      toast({
        title: 'Trash',
        description: 'Error on move all contacts checked to trash, try again.',
        status: 'error',
      });
    }
  }, [getDbRef, state.contacts, toast]);

  const restoreContacts = useCallback(async () => {
    const contactsChecked = state.contactOnTrash.filter(
      (contact) => contact.isChecked,
    );

    try {
      toast({
        title: 'Trash',
        description: 'Start to restore all contacts checked',
        status: 'info',
      });

      for (const { id } of contactsChecked) {
        await getDbRef().doc(id).update({
          isOnTrash: false,
          deletedAt: null,
        });
      }

      toast({
        title: 'Restore',
        description: 'All contacts have been moved successfully',
      });
    } catch {
      toast({
        title: 'Trash',
        description: 'Error on restore all contacts checked, try again.',
        status: 'error',
      });
    }
  }, [getDbRef, state.contactOnTrash, toast]);

  const deletePermanently = useCallback(async () => {
    const contactsChecked = state.contactOnTrash.filter(
      (contact) => contact.isChecked,
    );

    try {
      toast({
        title: 'Trash',
        description: 'Start to deleting all contacts checked',
        status: 'info',
      });

      for (const { id, avatarUrl } of contactsChecked) {
        if (avatarUrl) {
          await getStorageRef().child(id).delete();
        }

        await getDbRef().doc(id).delete();
      }

      toast({
        title: 'Trash',
        description: 'All contacts have been deleting successfully',
      });
    } catch {
      toast({
        title: 'Trash',
        description:
          'Error on deleted permanently all contacts checked, try again.',
        status: 'error',
      });
    }
  }, [getDbRef, getStorageRef, state.contactOnTrash, toast]);

  const clearTrash = useCallback(async () => {
    try {
      toast({
        title: 'Trash',
        description: 'Start to clear trash',
        status: 'info',
      });

      for (const { id, avatarUrl } of state.contactOnTrash) {
        if (avatarUrl) {
          await getStorageRef().child(id).delete();
        }

        await getDbRef().doc(id).delete();
      }

      toast({
        title: 'Trash',
        description: 'The trash was successfully cleaned',
      });
    } catch {
      toast({
        title: 'Trash',
        description: 'Error on clear trash, try again.',
        status: 'error',
      });
    }
  }, [getDbRef, getStorageRef, state.contactOnTrash, toast]);

  return (
    <ContactsManagerContext.Provider
      value={{
        state,
        dispatch,
        clearTrash,
        addContact,
        updateContact,
        restoreContacts,
        deletePermanently,
        moveContactToTrash,
        findAContactOnState,
        toggleContactFavorite,
        verifyIfExitsAContactByName,
        moveAllContactCheckedToTrash,
      }}
    >
      {children}
    </ContactsManagerContext.Provider>
  );
};
