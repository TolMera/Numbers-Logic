import type {EnhancedNumberType} from '../classes/enhancedNumber';
import { EnhancedNumber} from "../classes/enhancedNumber";
import { divisors } from './divisors';

// https://en.wikipedia.org/wiki/Abundant_number
export function isAbundant(n: number | EnhancedNumberType): boolean {
    n = new EnhancedNumber(n);
    if (n._isAbundant !== undefined) {
        return n.isAbundant;
    }

    // The smallest odd abundant number is 945.
    if (n.number === 1) {
        n.isAbundant = false;
        return n.isAbundant;
    }
    let divisorsOfNumber = divisors(n);
    // to remove n and leave the 'proper divisors'
    divisorsOfNumber.pop();
    let sumOfDivisors = divisorsOfNumber.reduce(function (a, b) {
        return a + b;
    });
    n.isAbundant = n < sumOfDivisors;
    return n.isAbundant;
};
