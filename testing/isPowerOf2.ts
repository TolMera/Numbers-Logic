import {atk} from 'advanced-testing-kit';
import * as generators from 'advanced-testing-kit/lib/numberGenerators';
import {isPolite} from '../lib/isPolite';

index();
function index() {
    let test = atk.makeTests(isPolite, {
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
            [{
                type: Number,
                generator: generators.safePositiveInteger,
            }],
            [{
                type: Number,
                generator: generators.safeNegativeInteger,
            }]
        ]
    });
    test();
}




