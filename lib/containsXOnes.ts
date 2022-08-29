import { EnhancedNumber } from "../classes/enhancedNumber";

export function containsXOnes(inputN: number | EnhancedNumber, x: number): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._containsXOnes !== undefined) {
		return n.containsXOnes;
	}

	return n.containsXOnes = n.number.toString(2).replace(/0/g, '').length === x;
}
