export function positiveOrNegativeSequence(
	n: number,
	nth: number,
	c: number
): boolean | number {
	if (n < 0) {
		if (n === nth) {
			return true;
		}
		if (n > nth) {
			return false;
		}
		c -= 1;
	} else {
		if (n === nth) {
			return true;
		}
		if (n < nth) {
			return false;
		}
		c += 1;
	}
	return c;
}
