import styled from 'styled-components';
import { motion } from 'framer-motion';

import { IconButton } from '../../';

export const Container = styled(motion.div)`
  position: absolute;

  inset: 0;
  overflow-y: auto;
`;

export const Counter = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 1.5rem 2rem 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;

  background-color: ${(props) => props.theme.colors.secondary};

  min-height: 5rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  z-index: 8000;
`;

export const Column = styled.div`
  display: table-cell;

  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;

  padding: 0 0.5rem;
`;

export const Columns = styled(motion.div)`
  padding: 1rem;

  > div {
    display: table;
    overflow: hidden;
    table-layout: fixed;
    width: 100%;

    div:first-child {
      padding-left: 1rem;
    }

    div:nth-child(2) {
      display: none;

      @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
        display: table-cell;
      }
    }

    div:nth-child(3) {
      display: none;

      @media (min-width: ${(props) => props.theme.breakPoints.md}) {
        display: table-cell;
      }
    }
  }
`;

export const ContactsWrapper = styled.div`
  padding: 1rem;

  > * + * {
    margin-top: 0.7rem;
  }

  height: 76%;
`;

export const CheckedOptions = styled(motion.div)`
  display: flex;
  align-items: center;

  font-size: 1.5rem;
  padding: 1rem;
  padding-left: 2rem;
`;

export const RoundedIconButton = styled(IconButton)`
  height: 2.5rem;
  width: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 2.5rem;

  div {
    border-radius: 2.5rem;
  }
`;

export const EmptyContactList = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;

  > img {
    width: 75%;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    margin: 8rem 0;

    > img {
      width: 40%;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    margin: 0;

    > img {
      width: 35%;
    }
  }

  @media(min-width: ${props => props.theme.breakPoints.lg}) {
    > img  {
      width: 25%;
    }
  }

  > h2 {
    margin-top: 1rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
  }
`;
