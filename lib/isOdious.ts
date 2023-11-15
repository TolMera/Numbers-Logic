import { EnhancedNumber } from "../classes/enhancedNumber";
import { isEvil } from "./isEvil";

export function isOdious(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isOdious !== undefined) {
		return n.isOdious;
	}

	return (n.isOdious = !isEvil(n));
}
