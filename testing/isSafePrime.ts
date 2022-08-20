import * as atk from "advanced-testing-kit";
import * as generators from "advanced-testing-kit/lib/numberGenerators";
import { isSafePrime } from "../lib/isSafePrime";

index();
function index() {
	let test = atk.makeTests(isSafePrime, {
		returns: [
			[[2], false],
			[[2 + 1], !true],
			[[5], true],
			[[5 + 1], !true],
			[[7], true],
			[[7 + 1], !true],
			[[11], true],
			[[11 + 1], !true],
			[[23], true],
			[[23 + 1], !true],
			[[47], true],
			[[47 + 1], !true],
			[[59], true],
			[[59 + 1], !true],
			[[83], true],
			[[83 + 1], !true],
			[[107], true],
			[[107 + 1], !true],
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
