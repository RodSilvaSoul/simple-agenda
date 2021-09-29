import styled, { keyframes } from 'styled-components';


const loadingAnimation = keyframes`
  0% {
    background-color: hsl(200,20%,70%)
  }

  100% {
    background-color: hsl(200, 20%, 95%)
  }
`;

export const ContactSkeleton = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 0.5rem;

  animation: ${loadingAnimation} 1s linear infinite alternate;
`;

export const ContactSkeletonWrapper = styled.div`
  padding: 1rem;

  > div + div {
    margin-top: 1rem;
  }
`;
