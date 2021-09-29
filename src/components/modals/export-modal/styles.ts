import styled from 'styled-components';
import { CSVLink } from 'react-csv';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    width: 50vw;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    width: 40vw;
  }
`;

export const Title = styled.div`
  margin-bottom: 1rem;

  > h2 {
    font-size: 1.2rem;
    font-weight: 500;

    color: #333;
  }
`;

export const ModalBodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 2rem;

  > label + label {
    margin-top: 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 4rem;
`;

export const CsvDownloadButtonLink = styled(CSVLink)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.975rem;
  font-family: inherit;
  font-weight: 500;

  padding: 0.5rem 1.5rem;

  border: 0;
  border-radius: 0.4rem;

  background-color: ${(props) => props.theme.colors.primary};

  outline: none;
  box-shadow: ${(props) => props.theme.shadow.button};

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.colors.primary)};
  }

  &:focus {
    background-color: ${(props) => darken(0.1, props.theme.colors.primary)};
  }
`;

interface ContactsSelectedAvailableProps {
  isAvailable: boolean;
}

export const ContactsSelectedAvailable = styled.div<ContactsSelectedAvailableProps>`
  pointer-events: ${(props) => (props.isAvailable ? 'all' : 'none')};
  filter: brightness(${(props) => (props.isAvailable ? 1 : 1.8)});
`;
