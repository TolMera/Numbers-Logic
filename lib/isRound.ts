import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';

export function isRound(n: number | EnhancedNumberType, base: number = 10) {
    n = new EnhancedNumber(n);
    if (n._isRound?.[base] !== undefined) {
        return n._isRound[base];
    }

    const numberInBase = Number(n.number).toString(base);
    if (Array.from(numberInBase).reverse()[0] === "0") {
        n._isRound[base] = true;
        return n._isRound[base];
    }
    n._isRound[base] = false;
    return n._isRound[base];
};
