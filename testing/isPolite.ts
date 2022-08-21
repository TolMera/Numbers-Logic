import * as atk from "advanced-testing-kit";
// import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isPolite } from "../lib/isPolite";

let test = atk.makeTests(isPolite, {
	returns: [
		[[Math.pow(2, 0)], true],
		[[Math.pow(2, 1)], false],
		[[Math.pow(2, 2)], false],
		[[Math.pow(2, 3)], false],
		[[Math.pow(2, 4)], false],
		[[Math.pow(2, 5)], false],
		[[Math.pow(2, 6)], false],
		[[Math.pow(2, 7)], false],
		[[Math.pow(2, 8)], false],
		[[Math.pow(2, 9)], false],
		[[Math.pow(2, 10)], false],

		[[Math.pow(2, 0) + 1], false],
		[[Math.pow(2, 1) + 1], true],
		[[Math.pow(2, 2) + 1], true],
		[[Math.pow(2, 3) + 1], true],
		[[Math.pow(2, 4) + 1], true],
		[[Math.pow(2, 5) + 1], true],
		[[Math.pow(2, 6) + 1], true],
		[[Math.pow(2, 7) + 1], true],
		[[Math.pow(2, 8) + 1], true],
		[[Math.pow(2, 9) + 1], true],
		[[Math.pow(2, 10) + 1], true],
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
