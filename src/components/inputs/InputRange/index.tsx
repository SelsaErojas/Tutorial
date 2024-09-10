import { useState } from "react";
import { Textfield } from "@inubekit/textfield";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";

import { currencyFormat, parseCurrencyString } from "@utils/currency";
import { basic } from "@design/tokens";

export interface InputRangeProps {
    handleInputChangeFrom: (valueFrom: number) => void;
    handleInputChangeTo: (valueTo: number) => void;
    id: string;
    labelFrom: string;
    labelTo: string;
    typeInput: ITextfieldInputType;
    required?: boolean;
    valueFrom?: number;
    valueTo?: number;
}

export declare type ITextfieldInputType = (typeof inputTypes)[number];

declare const inputTypes: readonly ["currency", "number"];

export const InputRange = (props: InputRangeProps) => {
    const {
        handleInputChangeFrom,
        handleInputChangeTo,
        id,
        labelFrom,
        labelTo,
        typeInput,
        required = false,
        valueFrom = 0,
        valueTo = 0,
    } = props;

    const [inputValueFrom, setInputValueFrom] = useState(valueFrom),
          [inputValueTo, setInputValueTo] = useState(valueTo);

    const handleChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueFrom = typeInput === "currency" ? parseCurrencyString(e.target.value) : Number(e.target.value);
        setInputValueFrom(valueFrom);
        handleInputChangeFrom(valueFrom);
    };

    const handleChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueTo = typeInput === "currency" ? parseCurrencyString(e.target.value) : Number(e.target.value);
        setInputValueTo(valueTo);
        handleInputChangeTo(valueTo);
    };

    return (
        <Grid templateColumns="repeat(2, 1fr)" margin={`${basic.spacing.s10} ${basic.spacing.s0}`} gap={basic.spacing.s12}>
            <Stack>
                <Textfield
                    id={`${id}TextFieldFrom`}
                    label={labelFrom}
                    onChange={handleChangeFrom}
                    required={required}
                    size="compact"
                    type={typeInput === "number" ? "number" : "text"}
                    value={
                        typeInput === "currency"
                            ? currencyFormat(inputValueFrom)
                            : inputValueFrom
                    }
                />
            </Stack>
            <Stack gap={basic.spacing.s12}>
                <Textfield
                    id={`${id}TextFieldTo`}
                    label={labelTo}
                    onChange={handleChangeTo}
                    required={required}
                    size="compact"
                    type={typeInput === "number" ? "number" : "text"}
                    value={
                        typeInput === "currency"
                            ? currencyFormat(inputValueTo)
                            : inputValueTo
                    }
                />
            </Stack>
        </Grid>
    );
};
