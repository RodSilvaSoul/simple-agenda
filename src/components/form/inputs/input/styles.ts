import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  label {
    display: block;
    margin-bottom: 0.1rem;
    font-weight: 500;
    font-size: 0.975rem;
  }
`;

interface InputWrapperProps {
  isError: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  width: 100%;

  > input {
    border: 0;
    appearance: none;
    border: 0;
    width: 100%;

    border-bottom: 1px solid ${(props) => props.theme.colors.border};

    outline: none;

    padding: 0.5rem 0;
  }

  &:focus-within {
    &::after {
      transform: scale(1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    background-color: ${(props) =>
      props.isError
        ? props.theme.colors.error.normal
        : props.theme.colors.primary};
    left: 0;
    right: 0;
    bottom: 0;

    transition: all 0.3s;

    transform: scale(0);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity:1
  }
`;

export const ErrorMessage = styled(motion.span)`
  display: inline-block;
  background-color: transparent;

  margin-top: 0.3rem;
  font-size: 0.875rem;
  font-weight: 500;
  padding-left: 0.1rem;

  animation: ${fadeIn} 0.4s ease-in;

  color: ${(props) => props.theme.colors.error.normal};
`;
