import { EnhancedNumber } from "../classes/enhancedNumber";
import { isSelf } from "./isSelf";
import { isPrime } from "./isPrime";

export function isSelfPrime(inputN: number | EnhancedNumber): boolean {
	const n = new EnhancedNumber(inputN);
	if (n._isSelfPrime !== undefined) {
		return n.isSelfPrime;
	}

	if (isPrime(n) && isSelf(n)) {
		n.isSelfPrime = true;
		return n.isSelfPrime;
	}
	n.isSelfPrime = false;
	return n.isSelfPrime;
}
