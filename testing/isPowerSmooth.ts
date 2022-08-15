import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isPowerSmooth } from "../lib/isPowerSmooth";

index();
function index() {
	let test = atk.makeTests(isPowerSmooth, {
		returns: [
			[[4, 2], false],
			[[4, 3], false],
			[[4, 4], true],
			[[4, 5], true],
			[[4, 6], true],
			[[4, 7], true],
			[[10, 2], false],
			[[10, 3], false],
			[[10, 4], false],
			[[10, 5], true],
			[[10, 6], true],
			[[10, 7], true],
			[[600, 2], false],
			[[600, 3], false],
			[[600, 4], false],
			[[600, 5], false],
			[[600, 6], false],
			[[600, 7], false],
			[[900, 2], false],
			[[900, 3], false],
			[[900, 4], false],
			[[900, 5], false],
			[[900, 6], false],
			[[900, 7], false],
			[[-10, 2], false],
			[[-10, 3], false],
			[[-10, 4], false],
			[[-10, 5], true],
			[[-10, 6], true],
			[[-10, 7], true],
			[[-600, 2], false],
			[[-600, 3], false],
			[[-600, 4], false],
			[[-600, 5], false],
			[[-600, 6], false],
			[[-600, 7], false],
			[[-900, 2], false],
			[[-900, 3], false],
			[[-900, 4], false],
			[[-900, 5], false],
			[[-900, 6], false],
			[[-900, 7], false],
		],
		inputs: [
			[
				{
					type: Number,
					generator: generators.safePositiveInteger,
				},
			],
			[
				{
					type: Number,
					generator: generators.safeNegativeInteger,
				},
			],
		],
	});
	test();
}
