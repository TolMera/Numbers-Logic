import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isSmooth } from "../lib/isSmooth";

index();
function index() {
	let test = atk.makeTests(isSmooth, {
		returns: [
			[[1, 7], false],
			[[7, 7], false],
			[[11, 7], false],
			[[13, 7], false],
			[[17, 7], false],
			[[19, 7], false],
			[[23, 7], false],
			[[29, 7], false],
			[[31, 7], false],
			[[1, 23], false],
			[[23, 23], false],
			[[29, 23], false],
			[[31, 23], false],
			[[37, 23], false],
			[[41, 23], false],
			[[43, 23], false],
			[[1 + 1, 7], true],
			[[7 + 1, 7], true],
			[[11 + 1, 7], true],
			[[13 + 1, 7], true],
			[[17 + 1, 7], true],
			[[19 + 1, 7], true],
			[[23 + 1, 7], true],
			[[29 + 1, 7], true],
			[[31 + 1, 7], true],
			[[1 + 1, 23], true],
			[[23 + 1, 23], true],
			[[29 + 1, 23], true],
			[[31 + 1, 23], true],
			[[37 + 1, 23], true],
			[[41 + 1, 23], true],
			[[43 + 1, 23], true],
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
