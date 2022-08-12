import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';
import {isOdd} from "./isOdd";

export function isEvil(n: number | EnhancedNumberType): boolean {
    n = new EnhancedNumber(n);
    if (n._isEvil !== undefined) {
        return n.isEvil;
    }

    let bits = 0;
    for (const bit of parseInt(n.number).toString(2)) {
        if (bit === "1") {
            bits++;
        }
    }
    n.isEvil = bits > 0 && isOdd(bits);
    return n.isEvil;
};
