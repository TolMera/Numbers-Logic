import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { getIntRoot } from "../lib/getIntRoot";

index();
function index() {
	let test = atk.makeTests(getIntRoot, {
		returns: [
			[[10], false],
			[[600], false],
			[[900], 2],
			[[-10], false],
			[[-600], false],
			[[-900], false],
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
