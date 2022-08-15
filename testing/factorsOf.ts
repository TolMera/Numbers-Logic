import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { factorsOf } from "../lib/factorsOf";

index();
function index() {
	let test = atk.makeTests(factorsOf, {
		returns: [
			[
				[10],
				[
					{ power: 1, prime: 2 },
					{ power: 1, prime: 5 },
				],
			],
			[
				[600],
				[
					{ power: 3, prime: 2 },
					{ power: 1, prime: 3 },
					{ power: 2, prime: 5 },
				],
			],
			[
				[900],
				[
					{ power: 2, prime: 2 },
					{ power: 2, prime: 3 },
					{ power: 2, prime: 5 },
				],
			],
			[
				[-10],
				[
					{ power: 1, prime: 2 },
					{ power: 1, prime: 5 },
					{ power: 1, prime: -2 },
					{ power: 1, prime: -5 },
				],
			],
			[
				[-600],
				[
					{ power: 3, prime: 2 },
					{ power: 1, prime: 3 },
					{ power: 2, prime: 5 },
					{ power: 3, prime: -2 },
					{ power: 1, prime: -3 },
					{ power: 2, prime: -5 },
				],
			],
			[
				[-900],
				[
					{ power: 2, prime: 2 },
					{ power: 2, prime: 3 },
					{ power: 2, prime: 5 },
					{ power: 2, prime: -2 },
					{ power: 2, prime: -3 },
					{ power: 2, prime: -5 },
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
