import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.ul)`
  list-style: none;

  > li + li {
    margin-top: 0.5rem;
  }
`;
