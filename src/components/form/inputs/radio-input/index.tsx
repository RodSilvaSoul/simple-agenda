import { forwardRef, ForwardRefRenderFunction } from 'react';
import { DefaultInputProps } from '../default-input-props';

import { Container } from './styles';

interface RadioInputProps extends DefaultInputProps {
  label: string;
  radioSize?: number | string;
}

const Base: ForwardRefRenderFunction<HTMLInputElement, RadioInputProps> = (
  { label, radioSize = '1.3rem', ...rest },
  ref,
) => {
  return (
    <Container size={radioSize}>
      <input type="radio" {...rest} ref={ref} />
      <span className="text">{label}</span>
      <span className="check-mark" />
    </Container>
  );
};

export const RadioInput = forwardRef(Base);
