import styled from 'styled-components';

interface ContainerProps {
  size: string | number;
}

export const Container = styled.label<ContainerProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:focus-within {
    &::before {
      outline: 2px solid #333;
    }
  }

  &::before {
    content: '';
    display: inline-block;

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border-radius: ${(props) => props.size};
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

  font-size: ${(props) => props.size};

  .check-mark {
    position: absolute;
    width: 0.7em;
    height: 0.7em;
    border-radius: 0.7em;

    left: 0.26em;
    top: 50%;
    transform: translateY(-50%);
  }

  .text {
    margin-left: 0.7rem;
    font-size: 0.875em;
  }

  > input {
    opacity: 0;
    appearance: none;

    &:checked {
      & ~ .check-mark {
        background-color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
