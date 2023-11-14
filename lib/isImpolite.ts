import { EnhancedNumber } from "../classes/enhancedNumber";
import { isPowerOf2 } from "./isPowerOf2";

export function isImpolite(inputN: number | EnhancedNumber) {
	const n = new EnhancedNumber(inputN);
	if (n._isImpolite !== undefined) {
		return n.isImpolite;
	}

	return (n.isImpolite = isPowerOf2(n));
}
