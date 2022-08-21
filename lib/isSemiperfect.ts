import { EnhancedNumber } from "../classes/enhancedNumber";
import { isAbundant } from "./isAbundant";
import { isPerfect } from "./isPerfect";
import { isPowerOf2 } from "./isPowerOf2";
import { isPractical } from "./isPractical";
import { semiperfectTest } from "./semiperfectTest";
import { getAliquotSum } from "./getAliquotSum";

/* Anything containing isSemiperfect has an extreme computation time */
export function isSemiperfect(n: number | EnhancedNumber): boolean {
	n = new EnhancedNumber(n);
	if (n._isSemiperfect) {
		return n.isSemiperfect as boolean;
	}

	if (n.number <= 1) {
		n.isSemiperfect = false;
		return n.isSemiperfect;
	}

	if (getAliquotSum(n) === n.number) {
		// This is a PERFECT number - that also makes it semi-perfect?
		n.isSemiperfect = true;
		return n.isSemiperfect;
	}

	if (isPractical(n) && !isPowerOf2(n)) {
		n.isSemiperfect = true;
		return n.isSemiperfect;
	}

	if (isPerfect(n) || isAbundant(n)) {
		console.warn(
			"This is likely to lag significantly (3b302489-dbe4-505c-989e-d9b122eb2340)"
		);
		n.isSemiperfect = semiperfectTest(n);
		return n.isSemiperfect;
	}
	n.isSemiperfect = false;
	return n.isSemiperfect;
}
