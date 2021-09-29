import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.form)`
  padding: 2rem 1.5rem;

  > * + * {
    margin-top: 1rem;
  }
  width: 85%;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    width: 60%;
  }
`;
