import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';

export function isEven(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._isEven !== undefined) {
        return n.isEven;
    }

    n.isEven = (n.number & 0b1) === 0;
    return n.isEven;
};
