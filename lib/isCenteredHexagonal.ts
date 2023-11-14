import { EnhancedNumber } from "../classes/enhancedNumber";
import { getCenteredHexagonal } from "./getCenteredHexagonal";
// import { positiveOrNegativeSequence } from "./positiveOrNegativeSequence";

/**
 * if n = 1 then the result of getCenteredHexagonal(1) is 1
 * That means that the nth is one
 * And C will be true
 *
 * if n = 2 then the result of getCenteredHexagonal(2) is 7
 * The first time this loops, C = 1, nth = 1, n = 2
 * The second loop will C = 2, nth = 7, n = 2
 * N will be less than nth, and C will be false
 *
 * That means because C is false, this is not a centered hexagonal number
 *
 * @param {number | EnhancedNumber} n - the number under test
 * @returns {boolean} - true if n is a centered hexagonal number
 */
export function isCenteredHexagonal(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isCenteredHexagonal !== undefined) {
		return n.isCenteredHexagonal;
	}

	let c: number = 0;
	let nth = getCenteredHexagonal(c);
	while (Math.abs(n.number) > nth) {
		nth = getCenteredHexagonal(++c);
	}
	return (n.isCenteredHexagonal = Math.abs(n.number) === nth);
}
