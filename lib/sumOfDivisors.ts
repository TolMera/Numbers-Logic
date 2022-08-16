import { sum } from "./sum";
import { divisors } from "./divisors";

import {
	EnhancedNumber,
	unknownIsEnhancedNumber,
} from "../classes/enhancedNumber";

export function sumOfDivisors(n: number | EnhancedNumber): number {
	if (unknownIsEnhancedNumber(n)) {
		return sum(divisors(n.number));
	}
	return sum(divisors(n));
}
