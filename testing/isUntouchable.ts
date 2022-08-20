import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isUntouchable } from "../lib/isUntouchable";

index();
function index() {
	let test = atk.makeTests(isUntouchable, {
		returns: [
			[[2], true],
			[[2 + 1], false],
			[[5], true],
			[[5 + 1], false],
			[[52], true],
			[[52 + 1], false],
			[[88], true],
			[[88 + 1], false],
			[[96], true],
			[[96 + 1], false],
			[[120], true],
			[[120 + 1], false],
			[[124], true],
			[[124 + 1], false],
			[[146], true],
			[[146 + 1], false],
			[[162], true],
			[[162 + 1], false],
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
