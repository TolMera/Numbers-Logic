import { EnhancedNumber } from "../classes/enhancedNumber";
import { divisors } from "./divisors";
import { sum } from "./sum";

/**
 * In number theory, the aliquot sum s(n) of a positive integer n is the sum of all proper divisors of n, that is, all divisors of n other than n itself.
 * The aliquot sum of a number n is equal to 0 if n is 1.
 * The aliquot sum of a number n is equal to n if n is a prime number.
 *
 * @param {number | EnhancedNumber} n - the number under test
 * @returns {number} - the aliquot sum of n
 * @see https://en.wikipedia.org/wiki/Aliquot_sum
 */
export function getAliquotSum(inputN: number | EnhancedNumber): number {
	const n = new EnhancedNumber(inputN);

	if (n._getAliquotSum !== undefined) {
		return n.getAliquotSum;
	}

	const divs = divisors(n);
	divs.pop(); // remove n itself
	n.getAliquotSum = sum(divs);
	return n.getAliquotSum;
}
