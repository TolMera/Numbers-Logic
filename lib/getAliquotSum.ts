import type { EnhancedNumberType } from '../classes/enhancedNumber';
import { EnhancedNumber } from '../classes/enhancedNumber';
import { divisors } from './divisors';
import { sum } from './sum';

export function getAliquotSum(n: number | EnhancedNumberType): number {
    n = new EnhancedNumber(n);

    if (n._getAliquotSum !== undefined) {
        return n.getAliquotSum;
    }

    const divs = divisors(n);
    divs.pop();
    n.getAliquotSum = sum(divs);
    return n.getAliquotSum;
}
