import { EnhancedNumber } from "../classes/enhancedNumber";
import { sieve } from "./sieve";

export function factorsOf(
	inputN: number | EnhancedNumber
): { prime: number; power: number }[] {
	const n = new EnhancedNumber(inputN);
	if (n._factorsOf !== undefined) {
		return n.factorsOf;
	}

	let mutableN: number = Math.abs(n.number);
	const primesToN = sieve(mutableN);

	const factors: { prime: number; power: number }[] = [];
	for (let k = 0; k < primesToN.length && mutableN > 1; k++) {
		const prime = primesToN[k];
		if (mutableN % prime === 0) {
			const factor = { prime, power: 0 };
			while (mutableN % prime === 0) {
				// The power could be calculated with P = Math.log(n) / Math.log(prime)
				factor.power++;
				mutableN /= prime;
			}
			factors.push(factor);
		}
	}

	if (mutableN > 1) {
		// Whatever remains, if it is not 1, must be prime
		factors.push({ prime: mutableN, power: 1 });
	}

	if (n.number < 0) {
		const negatives: { prime: number; power: number }[] = [];
		for (const factor of factors) {
			negatives.push({ ...factor });
			negatives[negatives.length - 1].prime *= -1;
		}
		factors.push(...negatives);
	}

	n.factorsOf = factors;
	return n.factorsOf;
}
