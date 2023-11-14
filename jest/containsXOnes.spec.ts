import { EnhancedNumber } from "../classes/enhancedNumber";

describe('containsXOnes', () => {
	test('should return true for 7 and x=3', () => {
		console.log((new EnhancedNumber(7)).containsXOnes);
		expect((new EnhancedNumber(7)).containsXOnes).toEqual(3);
	});

	test('should return false for 6 and x=3', () => {
		console.log((new EnhancedNumber(6)).containsXOnes);
		expect((new EnhancedNumber(6)).containsXOnes).toEqual(3);
	});
});
