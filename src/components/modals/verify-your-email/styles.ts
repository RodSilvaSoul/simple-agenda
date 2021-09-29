import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  padding: 1rem;

  color: ${(props) => props.theme.colors.primary};

  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;

  img {
    max-width: 100%;

    @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
      max-width: 60%;
    }
  }

  > p {
    margin-top: 0.5rem;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  right: 0.5rem;
  top: 0.5rem;

  height: 2rem;
  width: 2rem;

  border: 0;
  border-radius: 0.5rem;

  background-color: rgba(0, 0, 0, 0.1);

  color: #333;

  > svg {
    font-size: 1.5rem;
  }

  transition: all 0.3s ease-in;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
