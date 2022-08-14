import {atk} from 'advanced-testing-kit';
import * as generators from 'advanced-testing-kit/lib/numberGenerators';
import {isEven} from '../lib/isEven';

index();
function index() {
    let test = atk.makeTests(isEven, {
        returns: [
            [[10], true],
            [[600], true],
            [[900], true],
            [[-10], true],
            [[-600], true],
            [[-900], true],
            [[11], false],
            [[601], false],
            [[901], false],
            [[-11], false],
            [[-601], false],
            [[-901], false],
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
        ]
    });
    test();
}


