import { EnhancedNumber } from "../classes/enhancedNumber";

export function isRound(inputN: number | EnhancedNumber, base: number = 10) {
	const n = new EnhancedNumber(inputN);

	if (n._isRound[base] !== undefined) {
		return n._isRound[base];
	}

	const numberInBase = Number(n.number).toString(base);
	if (Array.from(numberInBase).reverse()[0] === "0") {
		n._isRound[base] = true;
		return true;
	}
	n._isRound[base] = false;
	return false;
}
