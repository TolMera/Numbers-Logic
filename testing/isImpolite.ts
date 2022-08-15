import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isImpolite } from "../lib/isImpolite";

index();
function index() {
	let test = atk.makeTests(isImpolite, {
		returns: [
			[[1], false],
			[[2], false],
			[[4], false],
			[[-1], true],
			[[-2], true],
			[[-4], true],
			[[10], true],
			[[600], true],
			[[900], true],
			[[-10], true],
			[[-600], true],
			[[-900], true],
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
