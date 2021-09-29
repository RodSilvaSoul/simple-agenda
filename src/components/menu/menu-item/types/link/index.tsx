import { Container } from './styles';

import { LinkProps } from 'react-router-dom';

export const Link = (props: LinkProps) => {
  return <Container role="menuitem" {...props} />;
};
