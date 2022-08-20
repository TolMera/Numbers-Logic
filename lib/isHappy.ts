import { EnhancedNumber } from "../classes/enhancedNumber";
import { sum } from "./sum";

export function isHappy(inputN: number | EnhancedNumber, base = 10) {
	const n = new EnhancedNumber(inputN);
	const theList: number[] = [];

	let num = Math.abs(n.number);
	while (true) {
		if (theList.includes(num)) {
			return false;
		}
		theList.push(num);

		num = sum(
			num
				.toString(base)
				.split("")
				.map((piece: string): number => Math.pow(parseInt(piece, base), 2))
		);

		if (num === 1) {
			return true;
		}
	}
}
