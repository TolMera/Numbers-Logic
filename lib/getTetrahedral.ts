import { EnhancedNumber } from "../classes/enhancedNumber";

export function getTetrahedral(inputN: number | EnhancedNumber): number {
	const n = new EnhancedNumber(inputN);
	if (n._getTetrahedral !== undefined) {
		return n.getTetrahedral;
	}

	n.getTetrahedral = (n.number * (n.number + 1) * (n.number + 2)) / 6;
	return n.getTetrahedral;
}
