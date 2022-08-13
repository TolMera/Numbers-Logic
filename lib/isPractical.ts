import {EnhancedNumber} from '../classes/enhancedNumber';
import {isPerfect} from './isPerfect';
import {divisors} from './divisors';
import {isPowerOf2} from './isPowerOf2';
import {isSubsetSum} from "./isSubsetSum";

export function isPractical(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._isPractical !== undefined) {
        return n.isPractical as boolean;
    }

    if (n.number === 0) {
        n.isPractical = false;
        return n.isPractical as boolean;
    }
    if (n.number === 1 || n.number === 2) {
        n.isPractical = true;
        return n.isPractical as boolean;
    }

    // Every power of two is also a practical number
    if (isPowerOf2(n)) {
        n.isPractical = true;
        return n.isPractical;
    }

    // Every even perfect number is also a practical number
    if (isPerfect(n)) {
        n.isPractical = true;
        return n.isPractical;
    }

    if (n.number % 4 === 0 || n.number % 6 === 0) {
        // Every practical number is divisible by 4 or 6 (or both).
        const divs = divisors(n);
        for (let i = 1; i < n.number; i++) {
            if (!isSubsetSum(divs, divs.length, i)) {
                n.isPractical = false;
                return n.isPractical;
            }
        }
        n.isPractical = true;
        return n.isPractical;
    }

    n.isPractical = false;
    return n.isPractical;
};
