import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';

import { isPowerOf2 } from './isPowerOf2';
import { isEven } from './isEven';

// https://en.wikipedia.org/wiki/Polite_number
/**
 * Returns the politeness of a number.
 * @param {Number} inputN The number to get the politeness of.
 * @return {Number} The politeness of the number.
 * @module numbers-logic
 * @author Bjorn Macintosh <tolmera@tolmera.com> (http://tolmera.com)
 */
export function getPoliteness(inputN: number | EnhancedNumber): number {
    const n = new EnhancedNumber(inputN);
    if (n._getPoliteness !== undefined) {
        return n.getPoliteness;
    }

    if (isPowerOf2(n)) {
        return 0;
    }
    // https://www.geeksforgeeks.org/find-politeness-number/
    let result = 1;

    // Eliminate all even prime factor
    // of number of n
    let mutableN = n.number;
    while (isEven(mutableN)) {
        mutableN /= 2;
    }

    // n must be odd at this point, so
    // iterate for only odd numbers
    // till sqrt(n)
    for (let i = 3; i * i <= mutableN; i += 2) {
        let divCount = 0;

        // if i divides n, then start
        // counting of Odd divisors
        while (mutableN % i === 0) {
            mutableN /= i;
            ++divCount;
        }

        result *= divCount + 1;
    }

    // If n odd prime still remains
    // then count it
    if (mutableN > 2) {
        result *= 2;
    }

    result--;

    n.getPoliteness = result;
    return n.getPoliteness;
};
