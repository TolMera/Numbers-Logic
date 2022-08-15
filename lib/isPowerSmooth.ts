import { factorsOf } from "./factorsOf";

export function isPowerSmooth(n: number, k: number) {
	const factors = factorsOf(n).map((value) =>
		Math.pow(value.prime, value.power)
	);
	if (factors.filter((v) => v > k).length === 0) {
		return true;
	}
	return false;
}
