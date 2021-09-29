import { forwardRef, ForwardRefRenderFunction } from 'react';
import { DefaultButtonProps } from '../default-button-props';
import { Container, Overlay } from './styles';

interface IconButtonProps extends DefaultButtonProps {
  size?: number | string;
  buttonTextColor?: string;
}

const Base: ForwardRefRenderFunction<HTMLButtonElement, IconButtonProps> = (
  { size, children, ...rest },
  ref,
) => {
  return (
    <Container ref={ref} size={size} {...rest} role="button">
      {children}
      <Overlay size={size} />
    </Container>
  );
};

export const IconButton = forwardRef(Base);
