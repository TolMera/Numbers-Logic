import { EnhancedNumber } from "../classes/enhancedNumber";

// ISO80000 makes 0 an natural number
// https://en.wikipedia.org/wiki/ISO_80000-2

export function isNatural(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isNatural !== undefined) {
		return n.isNatural;
	}

	n.isNatural = Number.isInteger(n.number);
	return n.isNatural;
}
