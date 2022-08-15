import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isRough } from "../lib/isRough";

index();
function index() {
	let test = atk.makeTests(isRough, {
		returns: [
			[[1, 7], true],
			[[7, 7], true],
			[[11, 7], true],
			[[13, 7], true],
			[[17, 7], true],
			[[19, 7], true],
			[[23, 7], true],
			[[29, 7], true],
			[[31, 7], true],
			[[1, 23], true],
			[[23, 23], true],
			[[29, 23], true],
			[[31, 23], true],
			[[37, 23], true],
			[[41, 23], true],
			[[43, 23], true],
			[[1 + 1, 7], false],
			[[7 + 1, 7], false],
			[[11 + 1, 7], false],
			[[13 + 1, 7], false],
			[[17 + 1, 7], false],
			[[19 + 1, 7], false],
			[[23 + 1, 7], false],
			[[29 + 1, 7], false],
			[[31 + 1, 7], false],
			[[1 + 1, 23], false],
			[[23 + 1, 23], false],
			[[29 + 1, 23], false],
			[[31 + 1, 23], false],
			[[37 + 1, 23], false],
			[[41 + 1, 23], false],
			[[43 + 1, 23], false],
		],

		inputs: [
			[
				{
					type: Number,
					generator: generators.safePositiveInteger,
				},
				{
					value: 5,
				},
			],
			[
				{
					type: Number,
					generator: generators.safeNegativeInteger,
				},
				{
					value: 5,
				},
			],
		],
	});
	test();
}
