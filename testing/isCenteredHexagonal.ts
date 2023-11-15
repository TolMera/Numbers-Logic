import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isCenteredHexagonal } from "../lib/isCenteredHexagonal";

const areCenteredHexagonal = [
	1, 7, 19, 37, 61, 91, 127, 169, 217, 271, 331, 397, 469, 547, 631, 721, 817,
	919, 1027, 1141, 1261, 1387, 1519, 1657, 1801, 1951, 2107, 2269, 2437, 2611,
	2791, 2977, 3169, 3367, 3571, 3781, 3997, 4219, 4447, 4681, 4921, 5167, 5419,
	5677, 5941, 6211, 6487, 6769,
];

let test = atk.makeTests(isCenteredHexagonal, {
	returns: [
		...areCenteredHexagonal.map((v) => [[v], true]),
		...areCenteredHexagonal.map((v) => [[v + 1], false]),
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
