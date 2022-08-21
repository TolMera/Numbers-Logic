import * as atk from "advanced-testing-kit";
import { divisors } from "../lib/divisors";
// import * as generators from "advanced-testing-kit/lib/numberGenerators";

index();
process.exit();
/* 

*/
function index() {
	let test = atk.makeTests(divisors, {
		returns: [
			[[10], [1, 2, 5, 10]],
			[
				[600],
				[
					1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 25, 30, 40, 50, 60, 75, 100,
					120, 150, 200, 300, 600,
				],
			],
			[
				[900],
				[
					1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 25, 30, 36, 45, 50, 60, 75,
					90, 100, 150, 180, 225, 300, 450, 900,
				],
			],
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
