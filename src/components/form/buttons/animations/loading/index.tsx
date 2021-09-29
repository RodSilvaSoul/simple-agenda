import { Variants } from 'framer-motion';
import { Container } from './styles';

const variants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
      duration: 0.6,
    },
  },
};

export const Spinner = () => {
  return <Container variants={variants} animate="animate" />;
};
