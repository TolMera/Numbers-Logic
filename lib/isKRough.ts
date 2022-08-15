import { EnhancedNumber } from "../classes/enhancedNumber";
import { factorsOf } from "./factorsOf";
import { isOdd } from "./isOdd";

export function isKRough(inputN: number | EnhancedNumber, k: number): boolean {
	const n = new EnhancedNumber(inputN);

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

	const primeFactors = factorsOf(n);
	if (primeFactors.filter((value) => value.prime < k).length === 0) {
		return true;
	}
	return false;
}
