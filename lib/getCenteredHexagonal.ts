import { EnhancedNumber } from "../classes/enhancedNumber";

export function getCenteredHexagonal(inputN: number | EnhancedNumber): number {
	const n = new EnhancedNumber(inputN);

	if (n._getCenteredHexagonal !== undefined) {
		return n.getCenteredHexagonal as number;
	}

	n.getCenteredHexagonal = 3 * n.number * (n.number - 1) + 1;
	return n.getCenteredHexagonal;
}
