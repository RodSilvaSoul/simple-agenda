import { MdWarning, MdClose } from 'react-icons/md';
import { FiAlertCircle } from 'react-icons/fi';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { HiCheckCircle } from 'react-icons/hi';

import { Toasts } from '../toast.types';
import { CloseButton, Container, Icon, Message } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { useUpdateEffect } from '../../../util';
import { useIsPresent } from 'framer-motion';
import { toastVariants } from './framer-motion.config';

const iconStatus = {
  success: <HiCheckCircle />,
  error: <FiAlertCircle />,
  info: <BsFillInfoCircleFill />,
  warning: <MdWarning />,
};

interface ToastProps extends Toasts {
  onRequestClose: () => void;
}

export const Toast = ({
  title,
  description,
  status = 'success',
  isClosable = true,
  duration = 6000,
  onCloseComplete,
  onRequestClose,
  requestClose = false,
}: ToastProps) => {
  const [delay, setDelay] = useState(duration);

  const isPresent = useIsPresent();

  useUpdateEffect(() => {
    if (!isPresent) {
      onCloseComplete?.();
    }
  }, [isPresent]);

  useUpdateEffect(() => {
    setDelay(duration);
  }, [duration]);

  const onMouseEnter = () => setDelay(null);
  const onMouserLeaver = () => setDelay(duration);

  const close = useCallback(() => {
    if (isPresent) {
      onRequestClose();
    }
  }, [isPresent, onRequestClose]);

  useEffect(() => {
    if (isPresent && requestClose) {
      onRequestClose();
    }
  }, [isPresent, onRequestClose, requestClose]);

  useEffect(() => {
    if (delay === null) return undefined;

    let timeoutId: number | null = null;

    timeoutId = window.setTimeout(close, delay);

    return () => {
      if (timeoutId) {
        return window.clearTimeout(timeoutId);
      }
    };
  }, [close, delay]);

  return (
    <Container
      status={status}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouserLeaver}
      variants={toastVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      role='alert'
    >
      <Icon>{iconStatus[status]}</Icon>
      <Message>
        <p>{title}</p>
        <small>{description}</small>
      </Message>
      {isClosable && (
        <CloseButton onClick={close} arial-label="close toast">
          <MdClose />
        </CloseButton>
      )}
    </Container>
  );
};
