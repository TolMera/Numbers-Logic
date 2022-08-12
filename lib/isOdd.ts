import isEven from "./isEven";

export function isOdd(n: number | EnhancedNumberType) {
    return !isEven(n);
};