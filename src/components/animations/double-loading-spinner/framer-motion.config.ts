import { Variants } from 'framer-motion';

export const FirstRingVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    },
  },
};

export const SecondaryRingVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'mirror',
    },
  },
};
