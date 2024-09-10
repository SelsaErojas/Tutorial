export const currencyFormat = (price: number): string => {
    if (price === 0 || !price) {
        return "$ 0";
    }
    return Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(price);
};

export const parseCurrencyString = (currencyString: string): number => {
    if (currencyString === "$ 0") {
        return NaN;
    }

    return parseInt(currencyString.replace(/\$|\./g, ""));
};