import * as atk from "advanced-testing-kit";
import { getCountDivisors } from "../lib/getCountDivisors";
import * as generators from "advanced-testing-kit/lib/numberGenerators";

index();
process.exit();
/* 

*/
function index() {
	let test = atk.makeTests(getCountDivisors, {
		returns: [
			[[10], 4],
			[[600], 24],
			[[900], 27],
			[[-10], 4 * 2],
			[[-600], 24 * 2],
			[[-900], 27 * 2],
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
