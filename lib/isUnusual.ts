import { EnhancedNumber } from "../classes/enhancedNumber";
import { factorsOf } from "./factorsOf";

export function isUnusual(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
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
