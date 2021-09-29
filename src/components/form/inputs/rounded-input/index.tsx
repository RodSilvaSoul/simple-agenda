import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import { DefaultInputProps } from '../default-input-props';
import { Container, ErrorMessage, PasswordVisibilityButton } from './styles';

interface RoundedInputProps extends DefaultInputProps {
  icon?: ReactNode;
  label?: string | null;
  error?: FieldError;
}

const Base: ForwardRefRenderFunction<HTMLInputElement, RoundedInputProps> = (
  { icon, name, label = null, error = null, type, ...rest },
  ref,
) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Container isError={!!error}>
      {label && <label htmlFor={name}>{label}</label>}
      <div>
        {icon}
        <input
          id={name}
          name={name}
          type={isPasswordVisible ? 'text' : type}
          {...rest}
          ref={ref}
        />
        {type === 'password' && (
          <PasswordVisibilityButton
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            aria-label="toggle password visibility"
            type='button'
          >
            {isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </PasswordVisibilityButton>
        )}
      </div>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
};

export const RoundedInput = forwardRef(Base);
