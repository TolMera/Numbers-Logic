import { EnhancedNumber } from "../classes/enhancedNumber";
import { isPowerOf2 } from "./isPowerOf2";

// https://en.wikipedia.org/wiki/Polite_number
export function isPolite(n: number | EnhancedNumber) {
	n = new EnhancedNumber(n);
	if (n._isPolite !== undefined) {
		return n.isPolite;
	}

	return (n.isPolite = !isPowerOf2(n));
}
