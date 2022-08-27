import {
	EnhancedNumber,
	unknownIsEnhancedNumber,
} from "../classes/enhancedNumber";
import { isEven } from "./isEven";

export function isOdd(inputN: number | EnhancedNumber) {
	const n = new EnhancedNumber(inputN);
	if (n._isOdd !== undefined) {
		return n.isOdd;
	}

	return (n.isOdd = !isEven(n));
}
