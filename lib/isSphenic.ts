import { EnhancedNumber } from "../classes/enhancedNumber";
import { factorsOf } from './factorsOf';
import { getCountDivisors } from './getCountDivisors';

export function isSphenic(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._isSphenic) {
        return n.isSphenic as boolean;
    }

    if (n.number <= 0) {
        n.isSphenic = false;
        return n.isSphenic;
    }
    if (n.number === 1) {
        n.isSphenic = false;
        return n.isSphenic;
    }

    if (getCountDivisors(n) === 8) {
        if (factorsOf(n).length === 3) {
            n.isSphenic = true;
            return n.isSphenic;
        }
    }
    n.isSphenic = false;
    return n.isSphenic;
};
