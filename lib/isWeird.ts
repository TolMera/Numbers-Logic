import { EnhancedNumber } from "../classes/enhancedNumber";
import { isAbundant } from "./isAbundant";
/* Anything containing isSemiperfect has an extreme computation time */
import { isSemiperfect } from "./isSemiperfect";

/**
 * a weird number is a natural number that is abundant but not semiperfect
 *
 * @param n the number to test
 * @returns true if the number is weird, false otherwise
 */
export function isWeird(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);

	if (n._isWeird) {
		return n.isWeird;
	}

	if (n.number <= 0) {
		n.isWeird = false;
		return n.isWeird;
	}

	if (isAbundant(n)) {
		if (!isSemiperfect(n)) {
			n.isWeird = true;
			return n.isWeird;
		}
	}
	n.isWeird = false;
	return n.isWeird;
}
