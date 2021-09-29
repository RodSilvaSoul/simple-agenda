import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FormGroup = styled.div`
  position: relative;

  label {
    display: block;
    font-weight: 500;
  }

  > button {
    position: absolute;
    left: 115%;
    bottom: 0;

    @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
      left: 109%;
    }

    @media (min-width: ${(props) => props.theme.breakPoints.md}) {
      left: 110%;
    }

    @media (min-width: ${(props) => props.theme.breakPoints.md}) {
      left: 109%;
    }
  }

  > div + div {
    margin-top: 1.5rem;
  }
`;

export const FromControlContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  position: relative;

  > button {
    position: absolute;
    left: 101%;
  }

  > div {
    flex: 1;
    position: relative;

    input {
      width: 100%;
    }
  }
`;
