import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { defaultItemStyle } from '../../default-item-style';

export const Container = styled(RouterLink)`
  ${defaultItemStyle}
`;
