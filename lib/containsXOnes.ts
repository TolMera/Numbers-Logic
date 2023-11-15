import { EnhancedNumber } from "../classes/enhancedNumber";

export function containsXOnes(inputN: number | EnhancedNumber, x: number): boolean {
	const n = new EnhancedNumber(inputN);
	n._containsXOnes[x] = n._containsXOnes[x] !== undefined ? n._containsXOnes[x] as boolean: n.number.toString(2).replace(/0/g, '').length === x;
	return n._containsXOnes[x]!;
}
