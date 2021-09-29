import { AnimatePresence } from 'framer-motion';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import { useAuthContext } from '../../../hooks';

import { SignInForm, SignUpForm } from './forms';

import {
  Container,
  FormsSection,
  ImageSection,
  ImageSectionText,
  Brand,
} from './styles';

type State = {
  from: string;
};

export const Authentication = () => {
  const [isInSignUpMode, setIsInSignUpMode] = useState(false);

  const { replace, location } = useHistory<State>();
  const { user } = useAuthContext();

  const onRequestToggle = useCallback(() => {
    setIsInSignUpMode((prev) => !prev);
  }, []);

  if (user && user.isEmailVerified) {
    const { from } = location.state || { from: { pathname: '/' } };

    replace(from);
  }

  return (
    <Container>
      <ImageSection>
        <Brand>
          <img src="/logo.png" alt="simple agenda" />
          Simple agenda
        </Brand>

        <img src="/login-page-image.svg" alt="authentication logo" />

        <ImageSectionText>
          <p>Manage your contacts in an easy and practical way </p>
        </ImageSectionText>
      </ImageSection>

      <FormsSection>
        <AnimatePresence exitBeforeEnter>
          {isInSignUpMode ? (
            <SignUpForm onRequestToggle={onRequestToggle} />
          ) : (
            <SignInForm onRequestToggle={onRequestToggle} />
          )}
        </AnimatePresence>
      </FormsSection>
    </Container>
  );
};
