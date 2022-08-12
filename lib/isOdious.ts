import isEvil from "./isEvil";

export function isOdious (n: number | EnhancedNumberType): boolean {
    return !isEvil(n);
};
