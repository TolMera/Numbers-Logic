import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';
import isPrime from "./isPrime";

// https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes
export function isSafePrime(n: number | EnhancedNumber) {
    n = new EnhancedNumber(n);
    if (n._isSafePrime !== undefined) {
        return n.isSafePrime;
    }

    if (isPrime(n) && isPrime((n.number / 2) - 1)) {
        n.isSafePrime = true;
        return n.isSafePrime;
    }
    n.isSafePrime = false;
    return n.isSafePrime;
}
