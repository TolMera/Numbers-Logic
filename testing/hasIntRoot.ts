import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { hasIntRoot } from "../lib/hasIntRoot";

index();
function index() {
	let test = atk.makeTests(hasIntRoot, {
		returns: [
			[[10], false],
			[[600], false],
			[[900], true],
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
