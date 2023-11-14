import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isImpolite } from "../lib/isImpolite";

index();
function index() {
	let test = atk.makeTests(isImpolite, {
		returns: [
			[[Math.pow(2, 0)], true],
			[[Math.pow(2, 1)], true],
			[[Math.pow(2, 2)], true],
			[[Math.pow(2, 3)], true],
			[[Math.pow(2, 4)], true],
			[[Math.pow(2, 5)], true],
			[[Math.pow(2, 6)], true],
			[[Math.pow(2, 7)], true],
			[[Math.pow(2, 8)], true],
			[[Math.pow(2, 9)], true],
			[[Math.pow(2, 10)], true],

			[[Math.pow(2, 0) + 1], true],
			[[Math.pow(2, 1) + 1], false],
			[[Math.pow(2, 2) + 1], false],
			[[Math.pow(2, 3) + 1], false],
			[[Math.pow(2, 4) + 1], false],
			[[Math.pow(2, 5) + 1], false],
			[[Math.pow(2, 6) + 1], false],
			[[Math.pow(2, 7) + 1], false],
			[[Math.pow(2, 8) + 1], false],
			[[Math.pow(2, 9) + 1], false],
			[[Math.pow(2, 10) + 1], false],
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
