import { css } from 'styled-components';

export const defaultItemStyle = css`
  display: flex;
  align-items: center;

  white-space: nowrap;

  padding: 0.4rem 1rem;

  font-weight: 500;
  font-size: 0.94rem;
  text-align: left;

  > svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.border};
  }
`;
