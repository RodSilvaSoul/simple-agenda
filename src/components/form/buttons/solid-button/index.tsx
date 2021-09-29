import { forwardRef, ForwardRefRenderFunction } from 'react';

import { Spinner } from '../animations';
import { DefaultButtonProps } from '../default-button-props';

import { Container } from './styles';

interface SolidButtonProps extends DefaultButtonProps {
  isLoading?: boolean;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
}

const Base: ForwardRefRenderFunction<HTMLButtonElement, SolidButtonProps> = (
  { children, isLoading = false, disabled, ...rest },
  ref,
) => {
  return (
    <Container ref={ref} disabled={isLoading || disabled} {...rest}>
      {isLoading ? <Spinner /> : children}
    </Container>
  );
};

export const SolidButton = forwardRef(Base);
