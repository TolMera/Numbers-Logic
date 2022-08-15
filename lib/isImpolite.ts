import { EnhancedNumber } from "../classes/enhancedNumber";
import { isPolite } from "./isPolite";

export function isImpolite(inputN: number | EnhancedNumber) {
	const n = new EnhancedNumber(inputN);
	if (n._isImpolite !== undefined) {
		return n.isImpolite;
	}

	n.isImpolite = !isPolite(n);
	return n.isImpolite;
}
