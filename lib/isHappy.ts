import { EnhancedNumber } from "../classes/enhancedNumber";
import { sum } from "./sum";

export function isHappy(n: number | EnhancedNumber, base = 10) {
	n = new EnhancedNumber(n);
	if (n._isHappy !== undefined) {
		return n.isHappy;
	}

	let num = Math.abs(n.number);

	const theList: number[] = [];
	while (true) {
		num = sum(
			Array.from(num.toString(base)).map((num) =>
				Math.pow(parseInt(num, base), 2)
			)
		);
		if (theList.includes(num)) {
			n.isHappy = false;
			return n.isHappy;
		}
		theList.push(num);

		if (num === 1) {
			n.isHappy = true;
			return n.isHappy;
		}
	}
}
