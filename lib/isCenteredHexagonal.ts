import { EnhancedNumber } from "../classes/enhancedNumber";
import { getCenteredHexagonal } from "./getCenteredHexagonal";
import { positiveOrNegativeSequence } from "./positiveOrNegativeSequence";

export function isCenteredHexagonal(n: number | EnhancedNumber): boolean {
	n = new EnhancedNumber(n);
	if (n._isCenteredHexagonal !== undefined) {
		return n.isCenteredHexagonal as boolean;
	}

	let c: number | boolean = 1;
	while (true) {
		let nth = getCenteredHexagonal(c as number);
		c = positiveOrNegativeSequence(n.number, nth, c as number);
		if ((c as any) instanceof Boolean) {
			n.isCenteredHexagonal = c as boolean;
			return n.isCenteredHexagonal;
		}
	}
}
