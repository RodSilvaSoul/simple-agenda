import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100vw;
  height: 100vh;

  overflow: auto;

  > div {
    flex: 1 0 auto;

    width: 80%;
    min-height: 100vh;
  }

  > div:first-child {
    padding: 2rem 2rem;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    flex-wrap: nowrap;

    > div:first-child {
      width: 60%;
    }

    > div:last-child {
      width: 40%;
    }
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;

  > img {
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
  }

  font-size: 1.2rem;
  font-weight: 600;
`;

export const ImageSection = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  padding: 1rem;

  > img {
    margin-top: auto;

    width: 100%;
    height: 50%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    > img {
      height: 55%;
      width: 55%;
    }
  }
`;

export const ImageSectionText = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 1.3rem;

  margin-top: 0.5rem;
  margin-bottom: auto;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    margin-top: 2rem;
  }
`;

export const FormsSection = styled.div`
  background-color: #9f7aea;
  overflow-x: hidden;
  overflow-y: auto;
`;
