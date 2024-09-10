import { useState } from "react";
import { Toggle } from "@inubekit/toggle";
import { basic } from "@design/tokens";

export interface ToggleOptionProps {
    checked: boolean;
    children: React.ReactNode;
    handleToggleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    labelToggle: string;
    name: string;
    valueToggle?: string;
}

export const ToggleOption = (props: ToggleOptionProps) => {
    const {
        checked,
        children,
        handleToggleChange,
        id,
        labelToggle,
        name,
        valueToggle = "",
    } = props;
    const [toogleCheck, setToogleCheck] = useState(checked);
    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToogleCheck(e.target.checked);
        handleToggleChange(e);
    };

    return (
        <>
            <Toggle
                checked={toogleCheck}
                id={id}
                label={labelToggle}
                margin={basic.spacing.s10}
                name={name}
                onChange={handleToggle}
                padding={basic.spacing.s0}
                size="small"
                value={valueToggle}
            />
            {toogleCheck && (<>{children}</>)}
        </>
    );
};
