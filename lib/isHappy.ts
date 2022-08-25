import { EnhancedNumber } from "../classes/enhancedNumber";
import { sum } from "./sum";

export function isHappy(inputN: number | EnhancedNumber, base: number = 10): boolean {
	const n = new EnhancedNumber(inputN);
	
	if (n._isHappy[base] !== undefined) {
		return n._isHappy[base] as boolean;
	}

	let num = Math.abs(n.number);
	const theList: number[] = [];
	while (true) {
		if (theList.includes(num)) {
			n._isHappy[base] = false;
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
			n._isHappy[base] = true;
			return true;
		}
	}
}
