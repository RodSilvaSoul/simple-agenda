import styled from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  line-height: 1.5;

  font-size: 0.975rem;
  color: ${(props) => props.buttonTextColor ?? props.theme.colors.secondary};

  padding: 0.5rem 1.5rem;

  border: 0;
  border-radius: 0.4rem;

  background-color: ${(props) =>
    props.buttonBackgroundColor ?? props.theme.colors.primary};

  transition: all 0.3s ease-in;

  box-shadow: ${(props) => props.theme.shadow.button};

  overflow: hidden;

  > svg {
    flex-shrink: 0;
    margin-right: 0.5rem;

    font-size: 1.3rem;
  }

  &:hover,
  &:focus {
    background-color: ${(props) => {
      const color = props.buttonBackgroundColor ?? props.theme.colors.primary;
      return darken(0.145, color);
    }};
  }
`;
