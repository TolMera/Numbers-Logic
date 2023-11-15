import { EnhancedNumber } from "../classes/enhancedNumber";
import { isNatural } from "./isNatural";

export function isWhole(inputN: number | EnhancedNumber) {
	const n = new EnhancedNumber(inputN);
	if (n._isWhole !== undefined) {
		return n.isWhole;
	}

	if (n.number > 0) {
		n.isWhole = isNatural(n);
		return n.isWhole;
	}
	n.isWhole = false;
	return n.isWhole;
}
