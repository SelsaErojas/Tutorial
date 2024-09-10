import { createGlobalStyle } from "styled-components";
import { basic } from "@design/tokens";

const GlobalStyles = createGlobalStyle`

  h1, h2, h3, h4, h5, h6, p {
    margin: ${basic.spacing.s0};
    padding: ${basic.spacing.s0};
  }

  body {
    margin: ${basic.spacing.s0};
    padding: ${basic.spacing.s0};
  }
`;

export { GlobalStyles };
