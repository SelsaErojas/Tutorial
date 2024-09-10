import { IOptionItem, Select } from "@inubekit/select";
import { useState } from "react";

export interface SingleChoiceProps {
    handleSelectChange: (
        event: React.ChangeEvent<HTMLInputElement>,
        name: string
    ) => void;
    id: string;
    labelSelect: string;
    name: string;
    options: IOptionItem[];
    required?: boolean;
    valueSelected?: string;
}

export const SingleChoice = (props: SingleChoiceProps) => {
    const {
        handleSelectChange,
        id,
        labelSelect,
        name,
        options,
        required,
        valueSelected = "",
    } = props;

    const [valueSelect, setValueSelect] = useState(valueSelected);

    const handleSelect = (
        event: React.ChangeEvent<HTMLInputElement>,
        name: string
    ) => {
        setValueSelect(event.target.innerText);
        handleSelectChange(event, name);
    };

    return (
        <Select
            id={id}
            label={labelSelect}
            name={name}
            onChange={handleSelect}
            options={options}
            placeholder="Seleccione una opción"
            required={required}
            size="wide"
            value={valueSelect}
        />
    );
};
