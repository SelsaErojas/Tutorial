import styled from "styled-components";
import { inube } from "@inubekit/foundations";

export const StyledOptionItemChecked = styled.li`
    display: flex;
    align-items: center;
    align-self: stretch;
    cursor: pointer;
    min-height: 40px;
    border-left-style: solid;
    border-left-width: 2px;
    border-left-color: ${({ theme }) =>
        theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
    padding-top: "4px";
    padding-right: "16px";
    padding-bottom: "4px";
    padding-left: "12px";

    p {
        color: ${({ theme }) =>
            theme?.palette?.neutral?.N900 || inube.palette.neutral.N900};
    }

    &:hover {
        border-left-color: ${({ theme }) =>
            theme?.palette?.blue?.B400 || inube.palette.blue.B400};

        background-color: ${({ theme }) =>
            theme?.palette?.neutral?.N20 || inube.palette.neutral.N20};

        p {
            color: ${({ theme }) =>
                theme?.palette?.blue?.B400 || inube.palette.blue.B400};
        }
    }
`;
