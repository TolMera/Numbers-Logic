import type { EnhancedNumberType } from '../classes/enhancedNumber';

import { EnhancedNumber } from '../classes/enhancedNumber';
import { divisors } from './divisors';
import { sum } from './sum';

function getAliquotSum(n: number | EnhancedNumberType) {
    n = EnhancedNumber(n);

    const getAliquotSum = n.getAliquotSum;
    if (getAliquotSum) {
        return getAliquotSum;
    }

    const divs = divisors(n);
    divs.pop();
    n.getAliquotSum = sum(divs);
    return n.getAliquotSum;
}

module.exports = {
    getAliquotSum
};
