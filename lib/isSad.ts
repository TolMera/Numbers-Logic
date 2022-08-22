import { EnhancedNumber } from "../classes/enhancedNumber";
import { isHappy } from "./isHappy";

export function isSad(inputN: number | EnhancedNumber, base: number = 10) {
	const n = new EnhancedNumber(inputN);

	return !isHappy(n, base);
}
