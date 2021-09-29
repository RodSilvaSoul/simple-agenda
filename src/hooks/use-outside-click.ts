import { RefObject, useEffect, useRef } from 'react';
import { useCallbackRef } from './use-callback-ref';

const getOwnerDocument = (node?: HTMLElement | null): Document => {
  return node instanceof Element ? node.ownerDocument ?? document : document;
};

const isValidEvent = (event: any, ref: RefObject<HTMLElement>) => {
  const target = event.target as HTMLElement;

  if (event.button > 0) return false;

  if (target) {
    const doc = getOwnerDocument(target);

    if (!doc.body.contains(target)) return false;
  }

  return !ref.current?.contains(target);
};

interface UseOutsideClickProps {
  ref: RefObject<HTMLElement>;

  handler?: (e: Event) => void;
}

export const useOutsideClick = (props: UseOutsideClickProps) => {
  const { ref, handler } = props;
  const savedHandler = useCallbackRef(handler);

  const stateRef = useRef({
    isPointerDown: false,
    ignoreEmulatedMouserEvents: false,
  });

  const state = stateRef.current;

  useEffect(() => {
    const onPointerDown: any = (event: PointerEvent) => {
      if (isValidEvent(event, ref)) {
        state.isPointerDown = true;
      }
    };

    const onMouseUp: any = (event: MouseEvent) => {
      if (state.ignoreEmulatedMouserEvents) {
        state.ignoreEmulatedMouserEvents = false;
        return;
      }

      if (state.isPointerDown && handler && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      state.ignoreEmulatedMouserEvents = true;

      if (handler && state.isPointerDown && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };

    const doc = getOwnerDocument(ref.current);

    doc.addEventListener('mousedown', onPointerDown, true);
    doc.addEventListener('mouseup', onMouseUp, true);
    doc.addEventListener('touchstart', onPointerDown, true);
    doc.addEventListener('touchend', onTouchEnd, true);

    return () => {
      doc.removeEventListener('mousedown', onPointerDown, true);
      doc.removeEventListener('mouseup', onMouseUp, true);
      doc.removeEventListener('touchstart', onPointerDown, true);
      doc.removeEventListener('touchend', onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state]);
};