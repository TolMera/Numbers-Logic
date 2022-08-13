import {EnhancedNumber} from '../classes/enhancedNumber';

export function isPowerOf2 (inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._isPowerOf2 !== undefined) {
        return n.isPowerOf2 as boolean;
    }

    if (n.number === 0 || n.number === 1) {
        n.isPowerOf2 = false;
        return n.isPowerOf2;
    }

    n.isPowerOf2 = (n.number & (n.number - 1)) === 0
    return n.isPowerOf2;
}
