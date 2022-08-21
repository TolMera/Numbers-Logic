import * as atk from "advanced-testing-kit";
// import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isStar } from "../lib/isStar";

const areStar = [
	1, 13, 37, 73, 121, 181, 253, 337, 433, 541, 661, 793, 937, 1093, 1261, 1441,
	1633, 1837, 2053, 2281, 2521, 2773, 3037, 3313, 3601, 3901, 4213, 4537, 4873,
	5221, 5581, 5953, 6337, 6733, 7141, 7561, 7993, 8437, 8893, 9361, 9841, 10333,
	10837, 11353, 11881, 12421,
];
const notStar = [
	2, 14, 38, 74, 122, 182, 254, 338, 434, 542, 662, 794, 938, 1094, 1262, 1442,
	1634, 1838, 2054, 2282, 2522, 2774, 3038, 3314, 3602, 3902, 4214, 4538, 4874,
	5222, 5582, 5954, 6338, 6734, 7142, 7562, 7994, 8438, 8894, 9362, 9842, 10334,
	10838, 11354, 11882, 12422,
];

let test = atk.makeTests(isStar, {
	returns: [
		...areStar.map((v) => [[v], true]),
		...notStar.map((v) => [[v], false]),
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
