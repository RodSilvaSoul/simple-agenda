import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.form`
  inset: 0;
  position: absolute;
  overflow: auto;
`;

export const FromWrapperContainer = styled.div`
  padding: 3rem 1.5rem;

  > * + * {
    margin-top: 1rem;
  }
  width: 80%;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    width: 60%;
  }
`;

export const Options = styled.div``;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 2rem 1rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  > button {
    margin: 1.5rem 0;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    flex-direction: row;
    justify-content: unset;
    align-items: unset;

    padding: 2rem 3.5rem 1rem;

    > button {
      align-self: flex-end;
      margin-left: auto;
    }
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  height: 3rem;
  width: 3rem;

  border: 0;
  border-radius: 3rem;

  background-color: transparent;

  transition: all 0.3s;

  top: 20px;
  left: 18px;

  svg {
    font-size: 1.5rem;
  }

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
