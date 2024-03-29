import * as atk from "advanced-testing-kit";
// import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isPowerOf2 } from "../lib/isPowerOf2";

index();
function index() {
	let test = atk.makeTests(isPowerOf2, {
		returns: [
			[[2], true],
			[[10], false],
			[[600], false],
			[[900], false],
			[[-10], false],
			[[-600], false],
			[[-900], false],
			[[-986497], false],
			[[149408], false],
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
}
