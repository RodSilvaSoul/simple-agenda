import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { darken } from 'polished';

import { defaultButtonReset } from '..';

export const Container = styled(motion.aside)`
  display: none;
  visibility: hidden;

  width: 17rem;
  height: 100vh;
  overflow: hidden;

  border-right: 1px solid ${(props) => props.theme.colors.border};

  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    display: block;
    visibility: visible;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4.55rem;

  padding: 0 1.6rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;

  color: ${(props) => props.theme.colors.primary};

  span {
    margin-left: 0.5rem;
  }

  img {
    width: 2.5rem;
  }
`;

export const ToggleButton = styled.button`
  ${defaultButtonReset}
  font-size: 1.6rem;

  height: 3rem;
  width: 3rem;

  border-radius: 3rem;
  outline: none;
`;

export const NewContactButton = styled(Link)`
  ${defaultButtonReset}

  margin: 1.2rem auto;

  width: 100%;
  max-width: 90%;
  padding: 0.85rem 0;

  border-radius: 0.6rem;

  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};

  box-shadow: ${(props) => props.theme.shadow.button};

  outline: none;

  &:hover,
  &:focus {
    background-color: ${(props) => darken(0.1, props.theme.colors.primary)};
    color: ${(props) => props.theme.colors.text.secondary};
  }

  svg {
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }
`;

export const Body = styled.div``;

const focusAndHoverTransition = css`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;

  svg {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const NavIntens = styled.div`
  display: flex;
  flex-direction: column;

  font-weight: 600;
  font-size: 0.855rem;

  hr {
    border-radius: 1rem;
    border-color: ${(props) => props.theme.colors.border};
  }
`;

const defaultNavItemStyle = css`
  display: flex;
  align-items: center;

  height: 2.5rem;
  width: 100%;
  max-width: 95%;

  margin: 0.34rem auto;
  border-radius: 0.6rem;

  cursor: pointer;
  outline: none;

  transition: all 0.3s ease-in;

  &:focus,
  &:hover {
    ${focusAndHoverTransition}
  }

  > svg {
    margin-right: 1rem;
    margin-left: 0.86rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.primary};

    transition: all 0.3s ease-in;
  }
`;

interface NavLinkProps {
  isActiveLink?: boolean;
}

export const NavLink = styled(Link)<NavLinkProps>`
  ${defaultNavItemStyle}

  ${(props) => (props.isActiveLink ? focusAndHoverTransition : '')}
`;

export const NavButton = styled.button`
  ${defaultNavItemStyle}

  border: 0;
  background-color: transparent;
`;
