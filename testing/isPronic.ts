import { atk } from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isPronic } from "../lib/isPronic";

index();
function index() {
	let test = atk.makeTests(isPronic, {
		returns: [
			[[10, 1], false],
			[[600, 1], true],
			[[900, 1], false],
			[[-10, 1], false],
			[[-600, 1], false],
			[[-900, 1], false],
		],
		inputs: [
			[
				{
					type: Number,
					generator: generators.safePositiveInteger,
				},
			],
			[
				{
					type: Number,
					generator: generators.safeNegativeInteger,
				},
			],
		],
	});
	test();
}
