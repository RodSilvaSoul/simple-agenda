import { AnimatePresence } from 'framer-motion';

import { Toast } from '../toast/toast';
import { Toasts } from '../toast.types';

import { Container } from './styles';

interface RenderToastProps {
  toasts: Toasts[];
  removeAToast: (id: number) => void;
}

export const RenderToasts = ({ toasts, removeAToast }: RenderToastProps) => {
  return (
    <Container>
      <AnimatePresence>
        {toasts.map((toast) => (
          <li key={toast.id}>
            <Toast onRequestClose={() => removeAToast(toast.id)} {...toast} />
          </li>
        ))}
      </AnimatePresence>
    </Container>
  );
};
