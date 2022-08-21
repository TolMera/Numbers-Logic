/**
 * Determines whether an integer is 'perfect'.
 * @module numbers-logic
 * @author Bjorn Macintosh <bjorn.macintosh@gmail.com> (http://www.tolmera.com)
 */
import { EnhancedNumber } from "../classes/enhancedNumber";
import { divisors } from "./divisors";
import { sum } from "./sum";

export function isPerfect(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isPerfect !== undefined) {
		return n.isPerfect as boolean;
	}

	if (n.number === 1) {
		n.isPerfect = false;
		return n.isPerfect;
	}

	const divisorsOfNumber = divisors(n);
	divisorsOfNumber.pop();

	const sumOfDivisors = sum(divisorsOfNumber);
	n.isPerfect = n.number === sumOfDivisors;

	return n.isPerfect;
}
