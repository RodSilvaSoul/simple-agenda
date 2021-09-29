import { useCallback, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { SolidButton } from '../../components';

import { DefaultModal } from '../../components/modals/default-modal';
import { Container, ButtonsWrapper } from './styles';

type UseUserDecisionModalProps = {
  onYes: () => void;
  onNo?: () => void;
  textAlert: string;
  subAlert?: string;
};

export const useUserDecisionModal = ({
  onNo,
  onYes,
  textAlert,
  subAlert = '',
}: UseUserDecisionModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    colors: { error, success },
  } = useTheme();

  const toggleModalOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const modalElement = useMemo(() => {
    const onRequestYes = () => {
      onYes();
      toggleModalOpen();
    };

    const onRequestNo = () => {
      onNo?.();
      toggleModalOpen();
    };

    return (
      <DefaultModal isOpen={isOpen} onRequestClose={() => {}}>
        <Container>
          <p>{textAlert}</p>

          {subAlert && <small>{subAlert}</small>}

          <ButtonsWrapper>
            <SolidButton
              onClick={onRequestNo}
              buttonBackgroundColor={error.normal}
            >
              NO
            </SolidButton>

            <SolidButton
              onClick={onRequestYes}
              buttonBackgroundColor={success.normal}
            >
              YES
            </SolidButton>
          </ButtonsWrapper>
        </Container>
      </DefaultModal>
    );
  }, [
    error.normal,
    success.normal,
    isOpen,
    onNo,
    onYes,
    subAlert,
    textAlert,
    toggleModalOpen,
  ]);

  return {
    modalElement,
    toggleModalOpen,
  };
};
