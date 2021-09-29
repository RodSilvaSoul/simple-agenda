import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { MenuPosition } from '../menu.types';

const positionsStyles = {
  bottom: css`
    top: 115%;
    left: -100%;
  `,
  top: css`
    bottom: 115%;
    left: -100%;
  `,
  left: css`
    top: 0;
    right: 115%;
  `,
  right: css`
    top: 0;
    left: 115%;
  `,
};

interface ContainerProps {
  menuPosition: MenuPosition;
}

export const Container = styled(motion.div)<ContainerProps>`
  display: flex;
  flex-direction: column;
  position: absolute;

  ${(props) => positionsStyles[props.menuPosition]};

  min-width: 8rem;

  padding: 0.5rem 0;

  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.colors.secondary};
  z-index: 44444;

  box-shadow: ${(props) => props.theme.shadow.button};

  > button + button {
    margin-top: 0.5rem;
  }
`;
