import { css } from "styled-components";

export const defaultButtonReset = css`
  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 1.5;

  font-size: 0.975rem;
  color: ${(props) => props.theme.colors.text.primary};

  border: 0;
  border-radius: 0.4rem;

  background-color: transparent;

  transition: all 0.3s ease-in;

  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }

  &:focus {
    background-color: rgba(60, 64, 67, 0.08);
  }
`;