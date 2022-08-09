import type {EnhancedNumberType} from '../classes/enhancedNumber'

import {EnhancedNumber} from '../classes/enhancedNumber';
import {factorsOf} from './factorsOf';

// Insperation derived from:
// https://www2.math.upenn.edu/~deturck/m170/wk2/numdivisors.html
function getCountDivisors(n: number | EnhancedNumberType): number {
    n = EnhancedNumber(n);
    if (n.getCountDivisors) {
        return n.getCountDivisors;
    }

    let factors: number[];
    if (n.number > 0) {
        factors = factorsOf(n);
    } else {
        factors = factorsOf(Math.abs(n.number));
    }

    const powers = factors.map(factor => factor.power);
    let divisors = 1;
    for (const num of powers) {
        divisors *= num + 1;
    }
    if (n.number < 0) {
        divisors *= 2;
    }
    n.getCountDivisors = divisors;
    return n.getCountDivisors;
};

module.exports = {getCountDivisors};
