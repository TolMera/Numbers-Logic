import type { EnhancedNumberType } from '../classes/enhancedNumber';
import { EnhancedNumber } from '../classes/enhancedNumber';
// const isSmooth = require('./isSmooth');
import { isRough } from './isRough';

export function isKRough(n, k) {
    n = new EnhancedNumber(n);
    if (n._isKRough?.[k] !== undefined) {
        return n._isKRough[k];
    }

    if (n.number < 0) {
        n._isKRough[k] = false;
        return n._isKRough[k];
    }

    // Every positive integer is 2-rough, since all its prime factors, being prime numbers, exceed 1.
    if (k === 2) {
        n._isKRough[k] = true;
        return n._isKRough[k];
    }

    // Every odd positive integer is 3-rough.
    if (isOdd(n) && k === 3) {
        n._isKRough[k] = true;
        return n._isKRough[k];
    }

    const primeFactors = factorsOf(n);
    if (primeFactors.filter((value) => value.prime < k).length === 0) {
        n._isKRough[k] = true;
        return n._isKRough[k];
    }
    n._isKRough[k] = false;
    return n._isKRough[k];
};
