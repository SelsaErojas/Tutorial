import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledButtonWrapper = styled.div`
  & > a > button > div {
    gap: 8px;
  }
`;
