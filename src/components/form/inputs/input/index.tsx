import { AnimatePresence } from 'framer-motion';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import { fadeInVariants } from '../../..';

import { DefaultInputProps } from '../default-input-props';
import { Container, ErrorMessage, InputWrapper } from './styles';

interface InputProps extends DefaultInputProps {
  inputProps?: DefaultInputProps;
  label?: string;
  error?: FieldError;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ inputProps, label, error = null, ...rest }, ref) => {
    return (
      <Container>
        {label && <label>{label}</label>}

        <InputWrapper isError={!!error}>
          <input {...inputProps} ref={ref} {...rest} />
        </InputWrapper>

        <AnimatePresence>
          {error && (
            <ErrorMessage
              aria-live="polite"
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {error.message}
            </ErrorMessage>
          )}
        </AnimatePresence>
      </Container>
    );
  };

export const Input = forwardRef(InputBase);
