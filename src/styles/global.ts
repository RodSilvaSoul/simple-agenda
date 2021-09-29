import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    color: inherit;
    font-weight: 500;

    cursor: pointer;
  }

  button[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  input {
    font-family: inherit;
    color: inherit;
    font-weight: 500;
  }

  html {
    font-size:93.75%;

    @media(min-width:${(props) => props.theme.breakPoints.md}) {
      font-size: 100%;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme.colors.text.primary};
  }
`;
