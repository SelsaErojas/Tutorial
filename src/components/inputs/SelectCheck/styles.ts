import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { basic } from "@design/tokens";
import { SelectCheckProps } from ".";

interface IStyledInputContainer {
  disabled: SelectCheckProps["disabled"];
  $focused: boolean;
  $status: SelectCheckProps["status"];
  $readonly: SelectCheckProps["readonly"];
  onClick: SelectCheckProps["onClick"];
}

const sizeOptions = {
  compact: {
    height: "40px",
  },
  wide: {
    height: "48px",
  },
};

interface IStyledInput {
  $focused: boolean;
  $size: SelectCheckProps["size"];
  $status: SelectCheckProps["status"];
  $fullwidth: SelectCheckProps["fullwidth"];
  $required: SelectCheckProps["required"];
  onClick?: SelectCheckProps["onClick"];
  onFocus: SelectCheckProps["onFocus"];
  onBlur?: SelectCheckProps["onBlur"];
  onChange?: SelectCheckProps["onChange"];
}

interface IStyledContainer {
  disabled: SelectCheckProps["disabled"];
  $fullwidth: SelectCheckProps["fullwidth"];
}

export const StyledContainer = styled.div<IStyledContainer>`
  position: relative;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "300px")};
`;

export const StyledInputContainer = styled.div<IStyledInputContainer>`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${basic.spacing.s8};
  user-select: none;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme, $readonly }) =>
    $readonly && (theme?.palette?.neutral?.N0 || inube.palette.neutral.N0)};
  border-color: ${({ theme, disabled, $readonly, $status, $focused }) => {
    if (disabled) {
      return (
        (theme?.palette?.neutral?.N20 || inube.palette.neutral.N20) +
        "; pointer-events: none; opacity: 0.5;"
      );
    }
    if ($focused && !$readonly) {
      return theme?.palette?.blue?.B300 || inube.palette.blue.B300;
    }
    if ($status === "invalid" && !$readonly) {
      return theme?.palette?.red?.R400 || inube.palette.red.R400;
    }
    return theme?.palette?.neutral?.N40 || inube.palette.neutral.N40;
  }};

  opacity: ${({ disabled }) => (disabled ? "0.5" : "none")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const StyledInput = styled.input<IStyledInput>`
  outline: none;
  border-radius: ${basic.spacing.s8};
  padding-right: ${basic.spacing.s12};
  padding-left: ${basic.spacing.s16};
  border-style: none;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.size};
  line-height: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.tracking};
  color: ${({ theme, disabled }) => {
    if (disabled) {
      return theme?.palette?.neutral?.N20 || inube.palette.neutral.N20;
    }
    return theme?.palette?.neutral?.N900 || inube.palette.neutral.N900;
  }};
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${({ $size }) => sizeOptions[$size!]};

  ::placeholder {
    color: ${({ theme }) =>
      theme?.palette?.neutral?.N20 || inube.palette.neutral.N20};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;
