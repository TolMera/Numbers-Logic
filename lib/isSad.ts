import { EnhancedNumber } from "../classes/enhancedNumber";
import { isHappy } from "./isHappy";

export function isSad(inputN: number | EnhancedNumber, base: number = 10) {
	const n = new EnhancedNumber(inputN);

	if (n._isSad[base] !== undefined) {
		return n._isSad[base] as boolean;
	}

	return (n._isSad[base] = !isHappy(n, base));
}
