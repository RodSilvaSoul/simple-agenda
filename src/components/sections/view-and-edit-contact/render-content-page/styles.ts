import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.form)`
  position: absolute;
  inset: 0;
  overflow-y: auto;
`;

export const MobileEditButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;

  height: 3.5rem;
  width: 3.5rem;

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  border: 0;
  border-radius: 3rem;

  box-shadow: ${(props) => props.theme.shadow.button};

  z-index: 99999;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    display: none;
    visibility: hidden;
  }

  svg {
    font-size: 1.5rem;
  }
`;
