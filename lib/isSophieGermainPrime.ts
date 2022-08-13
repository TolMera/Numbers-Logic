import { EnhancedNumber } from "../classes/enhancedNumber";
import { isPrime } from "./isPrime";

// https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes
export function isSophieGermainPrime(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._isSophieGermainPrime) {
        return n.isSophieGermainPrime as boolean;
    }

    if (isPrime(n) && isPrime(2 * n.number + 1)) {
        n.isSophieGermainPrime = true;
        return n.isSophieGermainPrime;
    }
    n.isSophieGermainPrime = false;
    return n.isSophieGermainPrime;
}
