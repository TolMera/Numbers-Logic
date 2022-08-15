import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isSemiperfect } from "../lib/isSemiperfect";

index();
function index() {
	let test = atk.makeTests(isSemiperfect, {
		returns: [
			[[6], true],
			[[6 + 1], !true],
			[[12], true],
			[[12 + 1], !true],
			[[18], true],
			[[18 + 1], !true],
			[[20], true],
			[[20 + 1], !true],
			[[24], true],
			[[24 + 1], !true],
			[[28], true],
			[[28 + 1], !true],
			[[30], true],
			[[30 + 1], !true],
			[[36], true],
			[[36 + 1], !true],
			[[40], true],
			[[40 + 1], !true],
		],
		advanced: {
			itterations: 1,
		},
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
