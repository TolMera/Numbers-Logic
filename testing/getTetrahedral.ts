import {atk} from 'advanced-testing-kit';
import * as generators from 'advanced-testing-kit/lib/numberGenerators';
import {getTetrahedral} from '../lib/getTetrahedral';

index();
function index() {
    let test = atk.makeTests(getTetrahedral, {
        returns: [
            [[10], 220],
            [[600], 36180200],
            [[900], 121905300],
            [[-10], -120],
            [[-600], -35820200],
            [[-900], -121095300],
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




