import * as atk from "advanced-testing-kit";
import { isMersennePrime } from "../lib/isMersennePrime";
import * as generators from "advanced-testing-kit/lib/numberGenerators";

index();
process.exit();
/* 

*/
function index() {
	let test = atk.makeTests(isMersennePrime, {
		returns: [
			[[10], false],
			[[600], false],
			[[900], false],
			[[-10], false],
			[[-600], false],
			[[-900], false],
			[[2], false],
			[[3], true],
			[[5], false],
			[[7], true],
			[[13], false],
			[[17], false],
			[[19], false],
			[[31], true],
			[[67], false],
			[[127], true],
			[[257], false],
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
