import * as atk from "advanced-testing-kit";
import { isWeird } from "../lib/isWeird";

const areWeird = [
	70, 836, 4030, 5830, 7192, 7912, 9272, 10430, 10570, 10792, 10990, 11410,
	11690, 12110, 12530, 12670, 13370, 13510, 13790, 13930, 14770, 15610, 15890,
	16030, 16310, 16730, 16870, 17272, 17570, 17990, 18410, 18830, 18970, 19390,
	19670,
];

let test = atk.makeTests(isWeird, {
	returns: [
		...areWeird.map((v) => [[v], true]),
		...areWeird.map((v) => [[v + 1], false]),
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
