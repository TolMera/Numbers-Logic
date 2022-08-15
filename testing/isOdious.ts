import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isOdious } from "../lib/isOdious";

index();
function index() {
	let test = atk.makeTests(isOdious, {
		returns: [
			[[10], true],
			[[600], true],
			[[900], true],
			[[-10], true],
			[[-600], true],
			[[-900], true],
			[[-986497], false],
			[[149408], false],
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
