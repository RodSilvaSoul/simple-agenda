import styled, { css, keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    background-color: hsl(200,20%,70%)
  }
  100% {
    background-color: hsl(200, 20%, 95%)
  }
`;

const isLoading = css`
  animation: ${loadingAnimation} 1s linear infinite alternate;
`;

interface ContainerProps {
  size: string | number;
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: ${(props) => props.size};

  overflow: hidden;

  font-size: ${(props) => props.size};

  background-color: ${(props) => props.theme.colors.shape};

  color: ${(props) => props.theme.colors.text.primary};

  ${(props) => (props.isLoading ? isLoading : '')}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    font-size: 0.5em;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
`;
