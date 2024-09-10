import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { basic } from "@design/tokens";

interface IStyledDivider {
  $dashed?: boolean;
}

const StyledDivider = styled.hr<IStyledDivider>`
  margin: ${basic.spacing.s0};
  width: 100%;
  height: 0px;
  border: none;
  border-top: 0.5px ${({ $dashed }) => ($dashed ? "dashed" : "solid")};
  border-top-color: ${({ theme }) =>
    theme.color?.stroke?.divider?.regular ||
    inube.palette.neutral.N40};
`;
export { StyledDivider };
