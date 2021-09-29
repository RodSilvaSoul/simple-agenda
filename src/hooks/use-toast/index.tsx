import { useCallback, useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import './container-style.scss';

import { RenderToasts } from './render-toast/render-toast';
import { Container, NewToastParams, Toasts } from './toast.types';

export const useToast = () => {
  const [toasts, setToasts] = useState<Toasts[]>([]);
  const counter = useRef(0);

  const removeAToast = useCallback((id: number) => {
    setToasts((prev) => {
      const filtered = prev.filter((toast) => toast.id !== id);
      return filtered;
    });
  }, []);

  const closeAll = useCallback(() => {
    setToasts((prev) =>
      prev.map((toast) => ({ ...toast, requestClose: true })),
    );
  }, []);

  const toast = useCallback(
    ({
      description,
      status,
      title,
      duration,
      isClosable,
      requestClose,
      onCloseComplete,
    }: NewToastParams) => {
      setToasts((prev) => [
        ...prev,
        {
          id: counter.current,
          description,
          status,
          title,
          duration,
          isClosable,
          requestClose,
          onCloseComplete,
        },
      ]);
      counter.current++;
    },
    [],
  );

  useEffect(() => {
    let portal: HTMLElement;

    const element = document.getElementById(Container.id);
    if (element) {
      portal = element;
    } else {
      const div = document.createElement('div');

      div.id = Container.id;
      div.className = Container.className;
      document.body.appendChild(div);

      portal = div;
    }

    render(
      <RenderToasts removeAToast={removeAToast} toasts={toasts} />,
      portal,
    );
  }, [removeAToast, toasts]);

  return {
    closeAll,
    toast,
  };
};
