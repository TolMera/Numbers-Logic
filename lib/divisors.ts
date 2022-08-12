import type { EnhancedNumberType } from '../classes/enhancedNumber';
import { EnhancedNumber } from '../classes/enhancedNumber';
import { factorsOf } from './factorsOf';
import { getCountDivisors } from './getCountDivisors';

export function divisors(n: number | EnhancedNumberType): number[] {
    n = new EnhancedNumber(n);
    if (n._divisors !== undefined) {
        return n.divisors;
    }

    const factors: number[] = factorsOf(Math.abs(n.number));

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
): void {
    if (!dimensions[index]) {
        divs.add(sum);
    }
    else {
        dimensions[index].forEach(
            v => again(dimensions, index + 1, divs, sum * v)
        );
    }
}
