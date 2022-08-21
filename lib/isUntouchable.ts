import { EnhancedNumber } from "../classes/enhancedNumber";
import { divisors } from "./divisors";
import { getAliquotSum } from "./getAliquotSum";
import { isOdd } from "./isOdd";

/**
 * An untouchable number is a positive integer that cannot be expressed as the sum of all the proper divisors of any positive integer (including the untouchable number itself).
 *
 * Because there's no way to predict if a number is unTouchable, you have to go through and test permutations of the number to find out.
 * This means that the function will not return correct results for all numbers.
 * take 48 for example, it is touchable, but the number needed to find those divisors is more than 46 multiples of 48.
 *
 * @param {number | EnhancedNumber} n - the number under test
 * @param {number} [maxMultipleOfN=50] - the maximum multiple of N to test against
 * @returns {boolean} - true if n is an untouchable number
 */
export function isUntouchable(
	inputN: number | EnhancedNumber,
	maxMultipleOfN: number = 50
): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isUntouchable) {
		return n.isUntouchable;
	}

	if (n.number > 5 && isOdd(n)) {
		return (n.isUntouchable = false);
	}

	for (let x = 1; x <= Math.abs(n.number) * maxMultipleOfN; x++) {
		if (getAliquotSum(x) === Math.abs(n.number)) {
			n.isUntouchable = false;
			return n.isUntouchable;
		}
	}
	n.isUntouchable = true;
	return n.isUntouchable;
}
