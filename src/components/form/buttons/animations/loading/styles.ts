import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: inline-block;

  height: 2em;
  width: 2em;
  border-radius: 2em;

  border: 5px solid ${(props) => props.theme.colors.primary};

  border-top-color: ${(props) => props.theme.colors.shape};
  border-left-color: ${(props) => props.theme.colors.shape};
`;
