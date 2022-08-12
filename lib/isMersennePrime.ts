import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';
import {isPowerOf2} from './isPowerOf2';
import {isPrime} from './isPrime';

// https://en.wikipedia.org/wiki/Mersenne_prime
export function isMersennePrime(n) {
    n = new EnhancedNumber(n);
    if (n._isMersennePrime !== undefined) {
        return n.isMersennePrime;
    }

    if (isPrime(n) && isPowerOf2(n + 1)) {
        n.isMersennePrime = true;
        return n.isMersennePrime;
    }
    n.isMersennePrime = false;
    return n.isMersennePrime;
}
