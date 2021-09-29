import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Base: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { type = 'button', ...rest },
  ref,
) => {
  return <Container role="menuitem" type={type} ref={ref} {...rest} />;
};

export const Button = forwardRef(Base);
