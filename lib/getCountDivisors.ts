import { EnhancedNumber } from "../classes/enhancedNumber";
import { factorsOf } from "./factorsOf";

// Insperation derived from:
// https://www2.math.upenn.edu/~deturck/m170/wk2/numdivisors.html
export function getCountDivisors(inputN: number | EnhancedNumber): number {
	const n = new EnhancedNumber(inputN);
	if (n._getCountDivisors !== undefined) {
		return n.getCountDivisors as number;
	}

	let factors = factorsOf(Math.abs(n.number));

	const powers = factors.map((factor) => factor.power);
	let divisors = 1;
	for (const num of powers) {
		divisors *= num + 1;
	}
	if (n.number < 0) {
		divisors *= 2;
	}
	n.getCountDivisors = divisors;
	return n.getCountDivisors;
}
