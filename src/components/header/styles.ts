import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99999;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4.47rem;
  width: 100%;
  padding: 0 2rem;

  margin: 0 auto;

  > button {
    margin-right: 1rem;

    @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
      display: none;
    }
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;

  font-weight: 600;

  font-size: 1.1rem;

  img {
    width: 3rem;
    height: 3rem;

    margin-right: 0.5rem;
  }
`;

export const Profile = styled.div`
  display: none;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    display: flex;
  }
`;
