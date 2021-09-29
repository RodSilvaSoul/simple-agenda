import {
  FirstRingVariants,
  SecondaryRingVariants,
} from './framer-motion.config';
import { Container, FirstRing, SecondaryRing } from './styles';

export const DoubleLoadingSpinner = () => {
  return (
    <Container>
      <FirstRing variants={FirstRingVariants}>
        <SecondaryRing variants={SecondaryRingVariants} />
      </FirstRing>
    </Container>
  );
};
