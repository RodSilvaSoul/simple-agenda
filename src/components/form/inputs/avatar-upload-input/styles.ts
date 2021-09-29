import styled from 'styled-components';

interface ContainerProps {
  size?: number | string;
  isRejected: boolean;
  isAccept: boolean;
  isEditMode: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  height: ${(props) => props.size ?? '2.5rem'};
  width: ${(props) => props.size ?? '2.5rem'};

  background-color: ${(props) => {
    const color = props.isAccept
      ? props.theme.colors.success.light
      : props.isRejected
      ? props.theme.colors.error.light
      : props.theme.colors.shape;

    return color;
  }};

  border-radius: ${(props) => props.size ?? '2.5rem'};

  overflow: hidden;

  font-size: ${(props) => props.size ?? '2.5rem'};

  cursor: pointer;

  pointer-events: ${(props) => (props.isEditMode ? 'all' : 'none')};

  svg {
    font-size: 0.4em;
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }

  img {
    position: absolute;

    width: 100%;
    height: 100%;
    inset: 0;
  }
`;
