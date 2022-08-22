import { EnhancedNumber } from "../classes/enhancedNumber";

export function getStar(inputN: number | EnhancedNumber): number {
	const n = new EnhancedNumber(inputN);
	if (n._getStar !== undefined) {
		return n.getStar;
	}

	return (n.getStar = 6 * n.number * (n.number - 1) + 1);
}
