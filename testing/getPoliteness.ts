import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { getPoliteness } from "../lib/getPoliteness";

index();
function index() {
	let test = atk.makeTests(getPoliteness, {
		returns: [
			[[10], 1],
			[[600], 5],
			[[900], 8],
			[[-10], 0],
			[[-600], 0],
			[[-900], 0],
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
