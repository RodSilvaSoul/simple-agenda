import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContactData = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;

  margin: 0.5rem 0.7rem 2rem;

  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 1.5rem 0.7rem;

  min-height: 50vh;

  overflow: auto;

  > h2 {
    font-weight: 500;
    font-size: 1.4rem;

    margin-bottom: 2rem;
  }

  > div + div {
    margin-top: 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    padding: 1.5rem;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 0.95rem;

  svg {
    font-size: 1.2rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.7rem;
`;
