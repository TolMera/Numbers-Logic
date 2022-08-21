import { EnhancedNumber } from "../classes/enhancedNumber";

export function isRound(inputN: number | EnhancedNumber, base: number = 10) {
	const n = new EnhancedNumber(inputN);

	const numberInBase = Number(n.number).toString(base);
	if (Array.from(numberInBase).reverse()[0] === "0") {
		return true;
	}
	return false;
}
