import type {EnhancedNumberType} from '../classes/enhancedNumber'
import {EnhancedNumber} from '../classes/enhancedNumber';
import {factorsOf} from './factorsOf';

// Insperation derived from:
// https://www2.math.upenn.edu/~deturck/m170/wk2/numdivisors.html
export function getCountDivisors(n: number | EnhancedNumberType): number {
    n = new EnhancedNumber(n);
    if (n._getCountDivisors !== undefined) {
        return n.getCountDivisors;
    }

    let factors = factorsOf(Math.abs(n.number));

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
