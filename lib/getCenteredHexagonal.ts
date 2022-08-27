import { EnhancedNumber } from "../classes/enhancedNumber";

export function getCenteredHexagonal(inputN: number | EnhancedNumber): number {
	const n = new EnhancedNumber(inputN);

	if (n._getCenteredHexagonal !== undefined) {
		return n.getCenteredHexagonal;
	}

	if (n.number === 0) {
		return (n.getCenteredHexagonal = 0);
	}
	return (n.getCenteredHexagonal =
		3 * Math.abs(n.number) * (Math.abs(n.number) - 1) + 1);
}
