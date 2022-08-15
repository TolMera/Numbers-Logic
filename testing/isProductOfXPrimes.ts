import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isProductOfXPrimes } from "../lib/isProductOfXPrimes";

index();
function index() {
	let test = atk.makeTests(isProductOfXPrimes, {
		returns: [
			[[10, 1], false],
			[[600, 1], false],
			[[900, 1], false],
			[[-10, 1], false],
			[[-600, 1], false],
			[[-900, 1], false],
			[[7, 1], true],
			[[599, 1], true],
			[[-7, 2], true],
			[[-599, 2], true],
		],
		inputs: [
			[
				{
					type: Number,
					generator: generators.safePositiveInteger,
				},
				{
					value: 1,
				},
			],
			[
				{
					type: Number,
					generator: generators.safePositiveInteger,
				},
				{
					value: 2,
				},
			],
			[
				{
					type: Number,
					generator: generators.safePositiveInteger,
				},
				{
					value: 3,
				},
			],
			[
				{
					type: Number,
					generator: generators.safeNegativeInteger,
				},
				{
					value: 1,
				},
			],
			[
				{
					type: Number,
					generator: generators.safeNegativeInteger,
				},
				{
					value: 2,
				},
			],
			[
				{
					type: Number,
					generator: generators.safeNegativeInteger,
				},
				{
					value: 3,
				},
			],
		],
	});
	test();
}
