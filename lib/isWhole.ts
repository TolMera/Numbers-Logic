import { EnhancedNumber } from "../classes/enhancedNumber";
import { isNatural } from "./isNatural";

export function isWhole(n) {
    n = new EnhancedNumber(n);
    if (n._isWhole) {
        return n.isWhole;
    }

    if (n > 0) {
        n.isWhole = isNatural(n);
        return n.isWhole;
    }
    n.isWhole = false;
    return n.isWhole;
};
