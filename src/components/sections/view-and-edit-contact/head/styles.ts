import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IconButton, SolidButton } from '../../..';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 2rem 1rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    flex-direction: row;
    justify-content: unset;
    align-items: unset;

    padding: 2rem 3.5rem 1rem;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  height: 2.2rem;
  width: 2.2rem;

  border: 0;
  border-radius: 2rem;

  background-color: transparent;

  transition: all 0.3s;

  top: 20px;
  left: 18px;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const CancelButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  left: 18px;
`;

export const ContactInfo = styled.div`
  display: flex;
  margin-left: 1rem;

  > h2 {
    font-weight: 500;

    margin: 1rem 0;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 0.5rem;
  }

  > button:last-child {
    display: none;
    @media (min-width: ${(props) => props.theme.breakPoints.md}) {
      display: flex;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    margin-left: auto;
    align-self: flex-end;
  }
`;

export const MobileSaveButton = styled(SolidButton)`
  margin: 1rem 0;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    display: none;
  }
`;
