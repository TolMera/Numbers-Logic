import {atk} from 'advanced-testing-kit';
import * as generators from 'advanced-testing-kit/lib/numberGenerators';
import {isCenteredHexagonal} from '../lib/isCenteredHexagonal';

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
            [[271], true],
            [[1078201], true],
            [[2427301], true],
            [[331], true],
            [[1081801], true],
            [[2432701], true],
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




