import { EnhancedNumber } from "../classes/enhancedNumber";
import { isPowerOf2 } from "./isPowerOf2";
import { isPrime } from "./isPrime";

// https://en.wikipedia.org/wiki/Mersenne_prime
export function isMersennePrime(inputN: number | EnhancedNumber) {
	const n = new EnhancedNumber(inputN);
	if (n._isMersennePrime !== undefined) {
		return n.isMersennePrime;
	}

	if (isPrime(n) && isPowerOf2(n.number + 1)) {
		n.isMersennePrime = true;
		return n.isMersennePrime;
	}
	n.isMersennePrime = false;
	return n.isMersennePrime;
}
