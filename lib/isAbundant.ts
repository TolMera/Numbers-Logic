import { EnhancedNumber } from "../classes/enhancedNumber";
import { getAliquotSum } from "./getAliquotSum";

// https://en.wikipedia.org/wiki/Abundant_number
export function isAbundant(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isAbundant !== undefined) {
		return n.isAbundant as boolean;
	}

	// The smallest odd abundant number is 945.
	if (n.number === 1) {
		n.isAbundant = false;
		return n.isAbundant;
	}

	n.isAbundant = getAliquotSum(n) > n.number;
	return n.isAbundant;
}
