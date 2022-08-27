import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isEvil } from "../lib/isEvil";

const evilNumbers = [
	0, 3, 5, 6, 9, 10, 12, 15, 17, 18, 20, 23, 24, 27, 29, 30, 33, 34, 36, 39, 40,
	43, 45, 46, 48, 51, 53, 54, 57, 58, 60, 63, 65, 66, 68, 71, 72, 75, 77, 78,
	80, 83, 85, 86, 89, 90, 92, 95, 96, 99, 101, 102, 105, 106, 108, 111, 113,
	114, 116, 119, 120, 123, 125, 126, 129,
];

let test = atk.makeTests(isEvil, {
	returns: [
		evilNumbers.map((n) => [n, true])
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
