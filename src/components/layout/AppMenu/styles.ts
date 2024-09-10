import styled from "styled-components";
import { basic } from "@design/tokens";

const StyledAppMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: ${basic.spacing.s32} ${basic.spacing.s64};

  @media (max-width: 490px) {
    padding: ${basic.spacing.s16};
  }
`;

export { StyledAppMenu };
