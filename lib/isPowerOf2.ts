import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';

export function isPowerOf2 (n: number | EnhancedNumberType): boolean {
    n = new EnhancedNumber(n);
    if (n._isPowerOf2 !== undefined) {
        return n.isPowerOf2;
    }

    if (n.number === 0 || n.number === 1) {
        n.isPowerOf2 = false;
        return n.isPowerOf2;
    }

    n.isPowerOf2 = (n.number & (n.number - 1)) === 0
    return n.isPowerOf2;
}
