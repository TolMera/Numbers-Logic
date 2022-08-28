import { EnhancedNumber } from "../classes/enhancedNumber";

export function factorial(inputN: number | EnhancedNumber): number {
	const n = new EnhancedNumber(inputN);
	if (n._factorial !== undefined) {
		return n.factorial;
	}

    let factorial = 0;
    for (let x = n.number; x >0; x--) {
        factorial = factorial * x;
    }

    n.factorial = factorial;
	return factorial;
}
