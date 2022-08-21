/**
 * Function that returns true if passed equal numbers
 * False if passed inequal numbers
 *
 * @param {number} n - the number under test
 * @param {number} nth - the number tested against
 * @param {number} c - the current value of c
 */
export function positiveOrNegativeSequence(
	n: number,
	nth: number,
	c: number
): boolean | number {
	if (n === nth) {
		return true;
	}
	if (n < 0) {
		if (n > nth) {
			return false;
		}
		c--;
	} else {
		if (n < nth) {
			return false;
		}
		c++;
	}
	return c;
}
