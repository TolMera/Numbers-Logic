/**
 * Determines whether an integer is 'perfect'.
 * @module numbers-logic
 * @author Bjorn Macintosh <bjorn.macintosh@gmail.com> (http://www.tolmera.com)
 */
import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber'; 
import {divisors} from './divisors';
import {sum} from './sum';

export function isPerfect(n: number | EnhancedNumberType):boolean {
    n = new EnhancedNumber(n);
    if (n._isPerfect !== undefined) {
        return n.isPerfect;
    }

    if (n.number === 1) {
        n.isPerfect = false;
        return n.isPerfect;
    }

    const divisorsOfNumber = divisors(n);
    divisorsOfNumber.pop();

    const sumOfDivisors = sum(divisorsOfNumber);
    n.isPerfect = (n === sumOfDivisors);

    return n.isPerfect;
};
