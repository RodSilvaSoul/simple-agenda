import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { darken } from 'polished';

import { SolidButton } from '../../..';

export const Form = styled(motion.form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 85%;

  color: ${(props) => props.theme.colors.secondary};

  > * {
    width: 100%;
  }

  > * + * {
    margin-top: 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    padding: 4rem 0;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    padding: 0;
  }
`;


export const ToggleMode = styled.button`
  position: relative;

  font-weight: 500;
  font-size: 0.875rem;

  color: ${(props) => props.theme.colors.secondary};

  background-color: transparent;
  appearance: none;
  border: 0;

  width: fit-content;

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;

    height: 1px;
    background-color: ${(props) => props.theme.colors.secondary};

    transition: transform 0.5s ease-in-out;

    transform: scaleX(0);
  }
`;

export const FormButton = styled(SolidButton)`
  background-color: ${(props) => darken(0.1, props.theme.colors.primary)};
  padding: 0.8rem 0;

  margin-top: 2rem;

  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;

  transition: all 0.3s ease-in;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.6);
  }
`;


export const LinkStyles = styled(Link)`
  position: relative;

  text-decoration: none;
  font-weight: 500;

  width: fit-content;

  align-self: flex-start;

  &:hover {
    &::after {
      transform: scale(1);
    }
  }

  &::after {
    content: '';
    position: absolute;

    left: 0;
    right: 0;
    bottom: -2px;

    height: 1px;

    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.secondary};

    transform: scale(0);

    transition: all 0.5s ease-in-out;
  }
`;
