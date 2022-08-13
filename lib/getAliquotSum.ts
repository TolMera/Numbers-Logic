import { EnhancedNumber } from '../classes/enhancedNumber';
import { divisors } from './divisors';
import { sum } from './sum';

export function getAliquotSum(n: number | EnhancedNumber): number {
    n = new EnhancedNumber(n);

    if (n._getAliquotSum !== undefined) {
        return n.getAliquotSum;
    }

    const divs = divisors(n);
    divs.pop();
    n.getAliquotSum = sum(divs);
    return n.getAliquotSum;
}
