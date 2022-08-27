import { EnhancedNumber } from "../classes/enhancedNumber";
import { isEven } from "./isEven";

export function isEvil(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isEvil !== undefined) {
		return n.isEvil;
	}

	let bits = 0;
	for (const bit of parseInt(String(n.number)).toString(2)) {
		if (bit === "1") {
			bits++;
		}
	}
	n.isEvil = bits > 0 && isEven(bits);
	return n.isEvil;
}
