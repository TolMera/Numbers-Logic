import type { EnhancedNumberType } from '../classes/enhancedNumber';

import { EnhancedNumber } from '../classes/enhancedNumber';
import {factorsOf} from './factorsOf';
import {getCountDivisors} from './getCountDivisors';

function divisors(n: number | EnhancedNumberType): number[] {
    n = EnhancedNumber(n);
    if (n.divisors) {
        return Array.from(n.divisors);
    }

    let factors: number[];
    if (n.number > 0) {
        factors = factorsOf(n);
    }
    else {
        factors = factorsOf(Math.abs(n.number));
    }

    const dimensions: number[] = [];
    for (const index in factors) {
        dimensions.push([]);
        for (let x = 0; x <= factors[index].power; x++) {
            dimensions[index].push(Math.pow(factors[index].prime, x));
        }
    }

    const divSet = new Set();
    again(dimensions, 0, divSet, 1);

    if (n.number < 0) {
        for (const num of Array.from(divSet)) {
            divSet.add(num * -1);
        }
    }

    const divs = Array.from(divSet).sort((a, b) => a - b);

    if (divs.length !== getCountDivisors(n)) {
        throw new Error(`There is a problem with the divisors function - Contact the publisher`);
    }
    n.divisors = divs;
    return Array.from(n.divisors);
}

function again(
    dimensions: number[],
    index: number,
    divs: number[],
    sum: number
) {
    if (!dimensions[index]) {
        divs.add(sum);
    }
    else {
        dimensions[index].forEach(
            v => again(dimensions, index + 1, divs, sum * v)
        );
    }
}

module.exports = divisors;
