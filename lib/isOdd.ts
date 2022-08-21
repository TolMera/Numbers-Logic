import {
	EnhancedNumber,
	unknownIsEnhancedNumber,
} from "../classes/enhancedNumber";
import { isEven } from "./isEven";

export function isOdd(n: number | EnhancedNumber) {
	return unknownIsEnhancedNumber(n) ? !isEven(n.number) : !isEven(n);
}
