import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isEvil } from "../lib/isEvil";

index();
function index() {
	let test = atk.makeTests(isEvil, {
		returns: [
			[[10], false],
			[[600], false],
			[[900], false],
			[[-10], false],
			[[-600], false],
			[[-900], false],
			[[-7919754], true],
			[[8128688], true],
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
