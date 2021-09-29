import { darken, rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  label {
    display: block;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1rem;
  }

  > div {
    display: flex;
    align-items: center;

    border-radius: 0.5rem;

    background-color: ${(props) => darken(0.1, props.theme.colors.primary)};

    padding: 0 1rem;

    transition: all 0.3s ease-in;

    > svg {
      margin-right: 0.5rem;
      font-size: 1.45rem;
    }

    input {
      appearance: none;
      border: 0;
      padding: 1rem 0;
      background-color: transparent;

      outline: none;
      color: ${(props) => props.theme.colors.secondary};
      font-family: inherit;
      font-weight: 500;
      font-size: 1rem;
      width: 100%;

      &::placeholder {
        color: rgba(255, 255, 255, 0.575);
        font-weight: 600;
      }
    }

    box-shadow: ${(props) => props.theme.shadow.button};

    &:focus-within {
      box-shadow: 0 0 0 3px
        ${(props) =>
          props.isError ? rgba(229, 62, 62, 0.5) : rgba(255, 255, 255, 0.6)};
    }
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

export const ErrorMessage = styled.span`
  display: inline-block;
  background-color: transparent;

  margin-top: 0.3rem;
  font-size: 0.875rem;
  font-weight: 500;
  padding-left: 0.1rem;

  animation: ${fadeIn} 0.4s ease-in;
`;

export const PasswordVisibilityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;

  border: 0;
  border-radius: 0.5rem;

  padding: 0.2rem;
  margin-left: 0.5rem;

  background-color: rgba(255, 255,255, 0.875);

  color: ${props => props.theme.colors.primary};

  > svg {
    flex-shrink: 0;
  }
`;
