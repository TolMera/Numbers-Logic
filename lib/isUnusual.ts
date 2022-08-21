import { EnhancedNumber } from "../classes/enhancedNumber";
import { factorsOf } from "./factorsOf";

export function isUnusual(n: number | EnhancedNumber): boolean {
	n = new EnhancedNumber(n);
	if (n._isUnusual) {
		return n.isUnusual as boolean;
	}

	let factors = factorsOf(n).pop();
	n.isUnusual = false;
	if (factors !== undefined && factors.prime > Math.sqrt(n.number)) {
		n.isUnusual = true;
	}
	return n.isUnusual;
}
