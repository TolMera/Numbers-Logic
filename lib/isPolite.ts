import { EnhancedNumber } from "../classes/enhancedNumber";
import { isPowerOf2 } from "./isPowerOf2";

// https://en.wikipedia.org/wiki/Polite_number
export function isPolite(inputN: number | EnhancedNumber) {
	const n = new EnhancedNumber(inputN);
	if (n._isPolite !== undefined) {
		return n.isPolite;
	}

	/**
	 * There is debate over if 1 is a polite or an impolite number.
	 * The below if statement allows you to toggle between the two.
	 */
	if (n.number === 1) {
		return (n.isPolite = true);
	}

	return (n.isPolite = !isPowerOf2(n));
}
