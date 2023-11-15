import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isUntouchable } from "../lib/isUntouchable";

const areUntouchable = [
	2, 5, 52, 88, 96, 120, 124, 146, 162, 188, 206, 210, 216, 238, 246, 248, 262,
	268, 276, 288, 290, 292, 304, 306, 322, 324, 326, 336, 342, 372, 406, 408,
	426, 430, 448, 472, 474, 498, 516, 518, 520, 530, 540, 552, 556, 562, 576,
	584, 612, 624, 626, 628, 658,
];

let test = atk.makeTests(isUntouchable, {
	returns: [
		...areUntouchable.map((v) => [[v], true]),
		...areUntouchable.map((v) => [[v + 1], false]),
	],
	inputs: [
		// [
		// 	{
		// 		type: Number,
		// 		generator: generators.safePositiveInteger,
		// 	},
		// ],
		// [
		// 	{
		// 		type: Number,
		// 		generator: generators.safeNegativeInteger,
		// 	},
		// ],
	],
});
test();
