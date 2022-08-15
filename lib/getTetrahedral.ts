import { EnhancedNumber } from "../classes/enhancedNumber";

export function getTetrahedral(n: number | EnhancedNumber): number {
	n = new EnhancedNumber(n);
	if (n._getTetrahedral !== undefined) {
		return n.getTetrahedral as number;
	}

	n.getTetrahedral = (n.number * (n.number + 1) * (n.number + 2)) / 6;
	return n.getTetrahedral;
}
