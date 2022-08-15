import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { getCenteredHexagonal } from "../lib/getCenteredHexagonal";

index();
function index() {
	let test = atk.makeTests(getCenteredHexagonal, {
		returns: [
			[[10], 271],
			[[600], 1078201],
			[[900], 2427301],
			[[-10], 331],
			[[-600], 1081801],
			[[-900], 2432701],
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
