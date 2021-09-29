import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SolidButton } from '../..';

export const Container = styled(motion.div)`
  position: absolute;
  inset: 0;
  overflow-y: auto;
`;

export const ContactsWrapper = styled.div`
  padding: 1rem;
  height: 76%;

  > * + * {
    margin-top: 1rem;
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 0;

  padding: 1rem;
  font-weight: 500;
  font-size: 0.9rem;

  height: 5rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  background-color: ${(props) => props.theme.colors.secondary};

  z-index: 9999;
`;

export const Counter = styled.div`
  font-size: 0.8rem;
  font-weight: 600;

  padding: 1.5rem 2rem 0.5rem;
`;

export const CheckedOptions = styled(motion.div)`
  display: flex;
  align-items: center;

  padding-left: 1rem;
`;

export const HeaderColumns = styled(motion.div)`
  display: table;
  table-layout: fixed;

  height: 100%;
  width: 100%;

  > div {
    display: table-cell;
    vertical-align: middle;
    white-space: nowrap;
    padding: 0 0.5rem;
  }

  > div:first-child {
    padding-left: 1rem;
  }

  > div:last-child {
    display: none;

    @media (min-width: ${(props) => props.theme.breakPoints.md}) {
      display: table-cell;
    }
  }
`;

export const ClearButton = styled.button`
  display: none;
  margin-left: 5rem;

  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;

  padding: 0.5rem 0.7rem;

  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};

  transition: all 0.3s ease-in;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    display: flex;
  }
`;

export const EmptyTrash = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;

  > img {
    width: 100%;
    height: auto;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    > img {
      width: 50%;
    }

    margin: 2rem auto 4rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    > img {
      width: 70%;
    }

    margin: 0;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    > img {
      width: 55%;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    > img {
      width: 42%;
    }
  }

  > h2 {
    margin-top: 1rem;
    letter-spacing: 0.05rem;
    font-weight: 600;
  }
`;

export const MobileClearTrashButton = styled(SolidButton)`
  position: fixed;
  right: 2rem;
  bottom: 2rem;

  height: 3.5rem;
  width: 3.5rem;

  > svg {
    flex-shrink: 0;
    font-size: 1.5rem;
  }

  border-radius: 3.5rem;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    display: none;
  }
`;
