import styled from 'styled-components';

interface ContainerProps {
  size?: string | number;
  buttonTextColor?: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  position: relative;

  overflow: hidden;

  height: ${(props) => props.size ?? '3rem'};
  width: ${(props) => props.size ?? '3rem'};

  border-radius: ${(props) => props.size ?? '3rem'};

  border: 0;
  background-color: ${(props) => props.theme.colors.secondary};

  color: ${(props) => props.buttonTextColor ?? props.theme.colors.primary};

  font-size: 1.5rem;

  svg {
    flex-shrink: 0;
  }

  &:focus {
    div {
      transform: scale(1);
    }
  }
`;

interface OverlayProps {
  size?: string | number;
}

export const Overlay = styled.div<OverlayProps>`
  position: absolute;

  inset: 0;

  background-color: rgba(1, 1, 1, 0.1);

  transition: all 0.3s;

  transform: scale(0);
  border-radius: ${(props) => props.size ?? '2.5rem'};
`;
