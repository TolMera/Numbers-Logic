import { EnhancedNumber } from "../classes/enhancedNumber";

/**
 * Sieves primes from 1 to the given number.
 * @param {Number} inputN The maximum number to sieve.
 * @return {Array} A list of primes between 2 and n.
 * @module numbers-logic
 * @author Bjorn Macintosh <bjorn.macintosh@gmail.com> (http://tolmera.com)
 */
export function sieve(inputN: number | EnhancedNumber): number[] {
	const n = new EnhancedNumber(inputN);
	if (n._sieve) {
		return n.sieve as number[];
	}

	var primes: number[] = [2];
	let c = 2;
	while (++c <= n.number) {
		let sqrtC = Math.sqrt(c);
		let flag = true;

		for (const prime of primes) {
			if (prime > sqrtC) break;
			if (c % prime === 0) {
				flag = false;
				break;
			}
		}

		if (flag) {
			primes.push(c);
		}
	}
	n.sieve = primes;
	return n.sieve;
}
