import { MdClose } from 'react-icons/md';

import { DefaultModal } from '../default-modal';
import { DefaultModalProps } from '../default-modal/default-modal-props';

import { Container, CloseButton } from './styles';

interface VerifyYourEmailModalProps extends DefaultModalProps {}

export const VerifyYourEmailModal = (props: VerifyYourEmailModalProps) => {
  return (
    <DefaultModal {...props}>
      <Container>
        <img src="/verify-your-email.svg" alt="verify yur email" />
        <p>Your account has been created</p>
        <small>Now verify your email for login in the dashboard</small>
        <CloseButton aria-label="close modal">
          <MdClose onClick={() => props.onRequestClose()} />
        </CloseButton>
      </Container>
    </DefaultModal>
  );
};
