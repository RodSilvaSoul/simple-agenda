import { ReactNode } from 'react';
import Modal from 'react-modal';

import { DefaultModalProps } from './default-modal-props';
import styles from './modal-styles.module.scss';

Modal.setAppElement('body');

interface ModalProps extends DefaultModalProps {
  children: ReactNode;
}   

export const DefaultModal = (props: ModalProps) => {
  return (
    <Modal
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      {...props}
    />
  );
};
