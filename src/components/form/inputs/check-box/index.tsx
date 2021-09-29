import { forwardRef, ForwardRefRenderFunction } from 'react';
import { DefaultInputProps } from '../default-input-props';
import { Container } from './styles';

interface CheckBoxProps extends DefaultInputProps {}

const Base: ForwardRefRenderFunction<HTMLInputElement, CheckBoxProps> = (
  props,
  ref,
) => {
  return (
    <Container>
      <input {...props} type="checkbox" ref={ref} />
    </Container>
  );
};

export const CheckBox = forwardRef(Base);
