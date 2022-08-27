import { EnhancedNumber } from "../classes/enhancedNumber";
import { isAbundant } from "./isAbundant";
import { isPerfect } from "./isPerfect";
import { isPowerOf2 } from "./isPowerOf2";
import { isPractical } from "./isPractical";
import { semiperfectTest } from "./semiperfectTest";
import { getAliquotSum } from "./getAliquotSum";

/* Anything containing isSemiperfect has an extreme computation time */
export function isSemiperfect(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isSemiperfect !== undefined) {
		return n.isSemiperfect;
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
		const progressIndicator = setInterval(
			process.stdout.write.bind(process.stdout, "."),
			1000
		);
		n.isSemiperfect = semiperfectTest(n);
		clearInterval(progressIndicator);
		return n.isSemiperfect;
	}
	n.isSemiperfect = false;
	return n.isSemiperfect;
}
