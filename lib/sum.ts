import {
	EnhancedNumber,
	unknownIsEnhancedNumber,
} from "../classes/enhancedNumber";

export function sum(
	itterable: number[] | EnhancedNumber[] | Set<number>
): number {
	let sum = 0;
	for (let value of itterable) {
		if (unknownIsEnhancedNumber(value)) {
			sum += value.number;
		} else if (typeof value === "number") {
			sum += value;
		} else {
			throw new Error(
				`Cannot add ${value} to sum ${sum} because it is not a number.`
			);
		}
	}
	return sum;
}
