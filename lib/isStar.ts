import { EnhancedNumber } from "../classes/enhancedNumber";
import { getStar } from "./getStar";

export function isStar(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isStar !== undefined) {
		return n.isStar;
	}

	let c: number = 1;
	let nth = getStar(c);
	while (Math.abs(n.number) > nth) {
		nth = getStar(++c);
	}
	return (n.isStar = Math.abs(n.number) === nth);
}
