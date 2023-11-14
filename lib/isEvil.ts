import { EnhancedNumber } from "../classes/enhancedNumber";
import { isEven } from "./isEven";

export function isEvil(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isEvil !== undefined) {
		return n.isEvil;
	}

	n.isEvil = isEven(n.number.toString(2).replace(/0/g, "").length);
	return n.isEvil;
}
