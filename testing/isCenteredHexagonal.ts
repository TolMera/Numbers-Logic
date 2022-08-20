import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isCenteredHexagonal } from "../lib/isCenteredHexagonal";

index();
function index() {
	let test = atk.makeTests(isCenteredHexagonal, {
		returns: [
			[[10], false],
			[[600], false],
			[[900], false],
			[[-10], false],
			[[-600], false],
			[[-900], false],
			[[271], false],
			[[1078201], false],
			[[2427301], false],
			[[331], false],
			[[1081801], false],
			[[2432701], false],
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
