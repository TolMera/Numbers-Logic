import { EnhancedNumber } from "../classes/enhancedNumber";
import { isNatural } from "./isNatural";

export function isWhole(n: number | EnhancedNumber) {
    n = new EnhancedNumber(n);
    if (n._isWhole) {
        return n.isWhole;
    }

    if (n.number > 0) {
        n.isWhole = isNatural(n);
        return n.isWhole;
    }
    n.isWhole = false;
    return n.isWhole;
};
