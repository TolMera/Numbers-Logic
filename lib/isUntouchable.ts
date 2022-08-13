import {EnhancedNumber} from "../classes/enhancedNumber";
import {getAliquotSum} from './getAliquotSum';

export function isUntouchable(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._isUntouchable) {
        return n.isUntouchable as boolean;
    }

    // Notes:
    // for a semiprime number pq, the aliquot sum is p + q + 1.

    // n * 2 as the ceiling is a guess
    for (let x = 1; x <= n.number * 3; x++) {
        if (getAliquotSum(x) === n.number) {
            n.isUntouchable = false;
            return n.isUntouchable;
        }
    }
    n.isUntouchable = true;
    return n.isUntouchable;
};
