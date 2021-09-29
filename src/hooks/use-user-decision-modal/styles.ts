import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 15rem;
  min-height: 8rem;

  text-align: center;

  > p {

    font-size: 1.2rem;
    font-weight: 500;
  }

  > small {
    font-size: 1rem;
  }

  > img {
    display: none;
    height: auto;
    width: 20rem;
    margin: 1rem auto;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    > p {
      font-size: 1rem;
    }

    > img {
      display: inline-block;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
`;
