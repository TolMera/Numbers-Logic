import isEven from "./isEven";

export function isOdd(n: number | EnhancedNumber) {
    return !isEven(n);
};