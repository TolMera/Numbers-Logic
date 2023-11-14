import { EnhancedNumber } from "../classes/enhancedNumber";
import { logX } from "./logX";
import { sieve } from "./sieve";

// https://en.wikipedia.org/wiki/Prime_power
// Every prime power (except powers of 2) has a primitive root
// All prime powers are deficient numbers.
// A prime power pn is an n-almost prime.
// It is not known whether a prime power pn can be an amicable number.
// If there is such a number, then pn must be greater than 101500 and n must be greater than 1400.
export function isPrimePower(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isPrimePower !== undefined) {
		return n.isPrimePower;
	}

	if (n.number <= 1) {
		n.isPrimePower = false;
		return n.isPrimePower;
	}

	let theSieve = sieve(n);
	if (theSieve.includes(n.number)) {
		n.isPrimePower = true;
		return n.isPrimePower;
	}
	theSieve = theSieve.filter((v) => v <= Math.sqrt(n.number));

	let x = 1;
	while (theSieve.length > 0) {
		const theLog = logX(n.number, x);
		if (theSieve.indexOf(x) > -1) {
			// This is not going to be exactly accurate, but should be able to get within a very tight margin.
			if (Math.pow(x, Math.round(theLog)) === n.number) {
				n.isPrimePower = true;
				return n.isPrimePower;
			}
		}
		theSieve = theSieve.filter((v) => v >= x);
		x++;
	}
	n.isPrimePower = false;
	return n.isPrimePower;
}
