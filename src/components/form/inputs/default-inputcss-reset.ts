import { css } from 'styled-components';

export const defaultInputCssReset = css`
  font-size: 0.975;
  font-weight: 500;

  color: ${(props) => props.theme.colors.text.primary};

  border: 1px solid ${(props) => props.theme.colors.border};

  border-radius: 0.3rem;

  padding: 0.7rem 0.5rem;
`;
