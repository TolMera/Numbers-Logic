import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isHappy } from "../lib/isHappy";

index();
function index() {
	let test = atk.makeTests(isHappy, {
		returns: [
			// Base 6 tests
			[[1, 6], true],
			[[2, 6], false],
			[[6, 6], true],
			[[7, 6], false],
			[[36, 6], true],
			[[37, 6], false],
			[[44, 6], true],
			[[45, 6], false],
			[[49, 6], true],
			[[50, 6], false],
			[[79, 6], true],
			[[80, 6], false],
			[[100, 6], true],
			[[101, 6], false],
			[[160, 6], true],
			[[161, 6], false],
			[[170, 6], true],
			[[171, 6], false],
			[[216, 6], true],
			[[217, 6], false],
			[[224, 6], true],
			[[225, 6], false],
			[[229, 6], true],
			[[230, 6], false],
			[[254, 6], true],
			[[255, 6], false],
			// Base 10 tests
			[[1, 10], true],
			[[2, 10], false],
			[[7, 10], true],
			[[8, 10], false],
			[[10, 10], true],
			[[11, 10], false],
			[[13, 10], true],
			[[14, 10], false],
			[[19, 10], true],
			[[20, 10], false],
			[[23, 10], true],
			[[24, 10], false],
			[[28, 10], true],
			[[29, 10], false],
			[[31, 10], true],
			[[32, 10], true], // Odd one out, the next number is also happy
			[[32, 10], true],
			[[33, 10], false],
			[[44, 10], true],
			[[45, 10], false],
		],
		inputs: [
			// All numbers in base 4 are happy numbers
			// [{
			//     type: Number,
			//     generator: generators.safePositiveInteger,
			// }, {
			//     value: 4
			// }],
			// [{
			//     type: Number,
			//     generator: generators.safeNegativeInteger,
			// }]
		],
	});
	test();
}
