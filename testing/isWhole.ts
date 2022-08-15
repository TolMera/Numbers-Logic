import { atk } from "advanced-testing-kit";
import {
	safePositiveInteger,
	safeNegativeInteger,
} from "advanced-testing-kit/lib/numberGenerators";
import { isWhole } from "../lib/isWhole";

index();
function index() {
	let test = atk.makeTests(isWhole, {
		returns: [
			[[1], true],
			[[2], true],
			[[3], true],
			[[1.1], false],
			[[1.2], false],
			[[1.3], false],
		],
		inputs: [
			[
				{
					type: Number,
					generator: safePositiveInteger,
				},
			],
			[
				{
					type: Number,
					generator: safeNegativeInteger,
				},
			],
		],
	});
	test();
}
