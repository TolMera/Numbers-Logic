import type {EnhancedNumberType} from '../classes/EnhancedNumberType';
import {EnhancedNumber} from '../classes/EnhancedNumber';
import {isSelf} from "./isSelf";
import {isPrime} from "./isPrime";

export function isSelfPrime(n: number | EnhancedNumber): boolean {
    n = EnhancedNumber(n);
    if (n._isSelfPrime) {
        return n.isSelfPrime;
    }

    if (isPrime(n) && isSelf(n)) {
        n.isSelfPrime = true;
        return n.isSelfPrime;
    }
    n.isSelfPrime = false;
    return n.isSelfPrime;
};
