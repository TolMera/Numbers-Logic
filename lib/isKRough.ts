import { EnhancedNumber } from "../classes/enhancedNumber";
import { factorsOf } from "./factorsOf";
import { isOdd } from "./isOdd";

export function isKRough(inputN: number | EnhancedNumber, k: number): boolean {
	const n = new EnhancedNumber(inputN);
	console.log(n.number);

	if (n.number < 0) {
		return false;
	}

	// Every positive integer is 2-rough, since all its prime factors, being prime numbers, exceed 1.
	if (k === 2) {
		return true;
	}

	// Every odd positive integer is 3-rough.
	if (isOdd(n.number) && k === 3) {
		return true;
	}

	/**
	 * There are two definitions of KRough numbers, one where all the primes of a number are GREATER than K
	 * And another where all the primes are EQUAL TO or GREATER than K.
	 *
	 * the second definition is the one we are using.
	 * To switch this, change the value of below.
	 */
	// if (factorsOf(n).filter((v) => v.prime <= k).length > 0) {
	if (factorsOf(n).filter((v) => v.prime < k).length > 0) {
		return false;
	}
	return true;
}
