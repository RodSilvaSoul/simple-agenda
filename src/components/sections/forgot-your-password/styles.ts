import styled from 'styled-components';
import { RoundedInput } from '../..';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  background-color: #d6bcfa;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    > div {
      flex: 1 0 auto;
    }
  }
`;

export const FormSection = styled.div`
  width: 100%;
  padding: 0 1rem;

  transition: all 0.6s ease-in;

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    width: 70%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
   width: 40%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    max-width: 80%;
    margin: 0 auto;
  }
`;

export const ImageSection = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 60%;

  > img {
    width: 50%;
    height: 50%;
  }
  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    display: flex;
  }
`;

export const Message = styled.div`
  font-size: 0.975rem;
  letter-spacing: 0.1rem;

  white-space: nowrap;

  color: ${(props) => props.theme.colors.primary};
`;

export const FormInput = styled(RoundedInput)``;
