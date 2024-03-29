import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isOdious } from "../lib/isOdious";

const odiousNumbers = [
	1, 2, 4, 7, 8, 11, 13, 14, 16, 19, 21, 22, 25, 26, 28, 31, 32, 35, 37, 38, 41,
	42, 44, 47, 49, 50, 52, 55, 56, 59, 61, 62, 64, 67, 69, 70, 73, 74, 76, 79,
	81, 82, 84, 87, 88, 91, 93, 94, 97, 98, 100, 103, 104, 107, 109, 110, 112,
	115, 117, 118, 121, 122, 124, 127, 128,
];

let test = atk.makeTests(isOdious, {
	returns: [...odiousNumbers.map((n) => [[n], true])],
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
