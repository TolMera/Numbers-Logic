export function isMoreRound(
	n1: number,
	n2: number,
	base1: number = 10,
	base2: number = 10
): null | boolean {
	const n1InBase = Math.abs(n1).toString(base1).split("").reverse();
	const n2InBase = Math.abs(n2).toString(base2).split("").reverse();

	while (true) {
		if (n1InBase[0] === "0" && n2InBase[0] === "0") {
			n1InBase.pop();
			n2InBase.pop();
			continue;
		}

		if (n1InBase[0] === "0") {
			return true;
		} else if (n2InBase[0] === "0") {
			return false;
		}
		return null;
	}
}
