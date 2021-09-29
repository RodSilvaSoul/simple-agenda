import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ToastStatus } from '../toast.types';

const statusColors = {
  error: '#F56565',
  success: '#48BB78',
  info: '#4299E1',
  warning: '#ED8936',
};

interface ContainerProps {
  status: ToastStatus;
}

export const Container = styled(motion.div)<ContainerProps>`
  display: flex;

  position: relative;
  
  min-width: 35ch;
  max-width: 40ch;
  
  background-color: ${(props) => statusColors[props.status]};
  color: #fff;
  
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;

  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);

  pointer-events: all;

`;

export const Icon = styled.div`
  font-size: 1.7rem;
  margin-right: 0.5rem; 
`;

export const Message = styled.div`
  font-size: 1rem;

  > * {
    max-width: 100%;
  }

  > p {
    font-weight: 600;
  }

  > small {
    font-weight: 500;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 1rem;

  border: 0;
  border-radius: 0.3rem;

  background-color: transparent;
  color: inherit;

  height: 1.5rem;
  width: 1.5rem;
  font-size: 1.2rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
