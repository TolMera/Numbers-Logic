import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isPrimePower } from "../lib/isPrimePower";

index();
function index() {
	let test = atk.makeTests(isPrimePower, {
		returns: [
			[[10], false],
			[[600], false],
			[[900], false],
			[[-10], false],
			[[-600], false],
			[[-900], false],
			[[2], true],
			[[3], true],
			[[4], true],
			[[5], true],
			[[7], true],
			[[8], true],
			[[9], true],
			[[11], true],
			[[13], true],
			[[16], true],
			[[17], true],
			[[19], true],
			[[23], true],
			[[25], true],
			[[27], true],
			[[29], true],
			[[31], true],
			[[32], true],
			[[37], true],
			[[41], true],
			[[43], true],
			[[47], true],
			[[49], true],
			[[53], true],
			[[59], true],
			[[61], true],
			[[64], true],
			[[67], true],
			[[71], true],
			[[73], true],
			[[79], true],
			[[81], true],
			[[83], true],
			[[89], true],
			[[97], true],
		],
		inputs: [
			[
				{
					type: Number,
					generator: generators.safePositiveInteger,
				},
			],
			// [{
			//     type: Number,
			//     generator: generators.safeNegativeInteger,
			// }]
		],
	});
	test();
}
