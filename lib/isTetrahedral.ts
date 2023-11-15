import { EnhancedNumber } from "../classes/enhancedNumber";
import { getTetrahedral } from "./getTetrahedral";
import { positiveOrNegativeSequence } from "./positiveOrNegativeSequence";

export function isTetrahedral(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isTetrahedral !== undefined) {
		return n.isTetrahedral;
	}

	let c: number = 1;
	let nth = getTetrahedral(c);
	while (Math.abs(n.number) > nth) {
		nth = getTetrahedral(++c);
	}
	return (n.isTetrahedral = Math.abs(n.number) === nth);
}
