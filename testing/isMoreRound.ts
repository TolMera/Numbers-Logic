import {atk} from 'advanced-testing-kit';
import {generators} from '../node_modules/advanced-testing-kit/lib/numberGenerators';
import {isMoreRound} from '../lib/isMoreRound';

index();
function index() {
    let test = atk.makeTests(isMoreRound, {
        returns: [
            [[10, 123], 1],
            [[600, 123], 1],
            [[900, 123], 1],
            [[-10, 123], 1],
            [[-600, 123], 1],
            [[-900, 123], 1],
            [[123, 10], -1],
            [[123, 600], -1],
            [[123, 900], -1],
            [[123, -10], -1],
            [[123, -600], -1],
            [[123, -900], -1],
            [[10, 10], 0],
            [[600, 600], 0],
            [[900, 900], 0],
            [[-10, -10], 0],
            [[-600, -600], 0],
            [[-900, -900], 0],
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


