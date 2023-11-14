import { containsXOnes } from '../lib/containsXOnes';

describe('containsXOnes', () => {
	test('should return true for 7 and x=3', () => {
		expect(containsXOnes(7, 3)).toBe(true);
	});

	test('should return false for 6 and x=3', () => {
		expect(containsXOnes(6, 3)).toBe(false);
	});
});
