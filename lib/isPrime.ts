import { EnhancedNumber } from '../classes/enhancedNumber';
import { factorsOf } from "./factorsOf";

export function isPrime(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._isPrime !== undefined) {
        return n.isPrime;
    }

    const factors = factorsOf(n);
    if (
        (factors.length === 1)
        && (factors[0].prime === n.number)
    ) {
        n.isPrime = true;
        return n.isPrime;
    }
    n.isPrime = false;
    return n.isPrime;
}
