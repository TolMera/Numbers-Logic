import { factorsOf } from "./factorsOf";

export function isProductOfXPrimes(n: number, k: number): boolean {
	if (factorsOf(n).length === k) {
		return true;
	}
	return false;
}
