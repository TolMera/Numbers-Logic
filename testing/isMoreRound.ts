import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isMoreRound } from "../lib/isMoreRound";

index();
function index() {
	let test = atk.makeTests(isMoreRound, {
		returns: [
			[[10, 123], true],
			[[600, 123], true],
			[[900, 123], true],
			[[-10, 123], true],
			[[-600, 123], true],
			[[-900, 123], true],
			[[123, 10], false],
			[[123, 600], false],
			[[123, 900], false],
			[[123, -10], false],
			[[123, -600], false],
			[[123, -900], false],
			[[10, 10], null],
			[[600, 600], null],
			[[900, 900], null],
			[[-10, -10], null],
			[[-600, -600], null],
			[[-900, -900], null],
		],
		inputs: [
			// [{
			//     type: Number,
			//     generator: generators.safePositiveInteger,
			// }],
			// [{
			//     type: Number,
			//     generator: generators.safeNegativeInteger,
			// }]
		],
	});
	test();
}
