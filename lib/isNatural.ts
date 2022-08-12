import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';

// ISO80000 makes 0 an natural number
// https://en.wikipedia.org/wiki/ISO_80000-2

export function isNatural(n: number | EnhancedNumberType): boolean {
    n = new EnhancedNumber(n);
    if (n._isNatural !== undefined) {
        return n.isNatural;
    }

    n.isNatural = Number.isInteger(n.number);
    return n.isNatural;
}
