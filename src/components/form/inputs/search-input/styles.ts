import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};

  padding: 0.6rem 0.7rem;

  border-radius: 0.3rem;
  color: ${(props) => props.theme.colors.text.secondary};

  width: 50%;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    width: 25%;
  }

  transition: all 0.5s ease-out;

  box-shadow: ${(props) => props.theme.shadow.button};

  &:focus-within {
    width: 100%;

    @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
      width: 50%;
    }
  }

  > input {
    font-size: 0.975rem;
    line-height: 1.5;

    border: 0;

    color: inherit;
    background-color: transparent;

    outline: none;

    width: 100%;

    padding: 0 0.5rem;

    &::placeholder {
      color: inherit;
    }

    transition: all 0.6s;
  }

  svg {
    font-size: 1.5rem;
    flex-shrink: 0;
  }
`;
