export type  ToastStatus = 'success' | 'error' | 'warning' | 'info'

export interface Toasts {
  id: number;
  status?: ToastStatus;
  title: string;
  description: string;
  isClosable?: boolean;
  duration?: number | null;
  requestClose?: boolean;
  onCloseComplete?: () => void;
}

export type NewToastParams = {
} & Omit<Toasts, 'onRequestClose' | 'id'>;


export enum Container {
  id = 'toast-portal',
  className = 'toast-container'
}