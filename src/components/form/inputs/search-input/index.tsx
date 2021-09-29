import { forwardRef, ForwardRefRenderFunction } from 'react';
import { MdSearch } from 'react-icons/md';

import { DefaultInputProps } from '../default-input-props';

import { Container } from './styles';

interface SearchInputProps extends DefaultInputProps {}

const Base: ForwardRefRenderFunction<HTMLInputElement, SearchInputProps> = (
  props,
  ref,
) => {
  return (
    <Container>
      <MdSearch />
      <input placeholder="Search..." {...props} ref={ref} />
    </Container>
  );
};

export const SearchInput = forwardRef(Base);
