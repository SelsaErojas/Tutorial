import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { basic } from "@design/tokens";
interface IStyledOptionList {
    $onClick?: React.ChangeEventHandler<HTMLInputElement>;
}

export const StyledOptionList = styled.ul<IStyledOptionList>`
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
    padding: ${basic.spacing.s4} ${basic.spacing.s0};
    position: absolute;
    z-index: 1;
    border-radius: ${basic.spacing.s4};
    background: ${({ theme }) => {
        return theme?.palette?.neutral?.N0 || inube.palette.neutral.N0;
    }};
    box-shadow:
        0px 1px 2px rgba(0, 0, 0, 0.3),
        0px 2px 6px 2px rgba(0, 0, 0, 0.15);
`;
