import { EnhancedNumber } from "../classes/enhancedNumber";
import { divisors } from "./divisors";
import { sum } from "./sum";

export function isArithmetic(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isArithmetic !== undefined) {
		return n.isArithmetic;
	}

	if (n.number === 0) {
		n.isArithmetic = false;
		return n.isArithmetic;
	}
	if (n.number === 1 || n.number < 0) {
		n.isArithmetic = true;
		return n.isArithmetic;
	}

	const divs = divisors(n);
	const mean = sum(divs) / divs.length;
	if (Number.isInteger(mean)) {
		n.isArithmetic = true;
		return n.isArithmetic;
	}
	n.isArithmetic = false;
	return n.isArithmetic;
}
