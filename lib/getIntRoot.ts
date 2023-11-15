import { EnhancedNumber } from "../classes/enhancedNumber";

export function getIntRoot(inputN: number | EnhancedNumber): number | boolean {
	const n = new EnhancedNumber(inputN);
	if (n._getIntRoot !== undefined) {
		return n.getIntRoot;
	}

	for (let c = 2; c <= Math.sqrt(n.number); c++) {
		let root = Math.pow(n.number, 1 / c);
		if (Number.isInteger(root)) {
			n.getIntRoot = c;
			return n.getIntRoot;
		}
	}
	n.getIntRoot = false;
	return n.getIntRoot;
}
