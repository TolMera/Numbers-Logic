import {atk} from 'advanced-testing-kit';
import * as generators from 'advanced-testing-kit/lib/numberGenerators';
import {isKRough} from '../lib/isKRough';

index();
function index() {
    let test = atk.makeTests(isKRough, {
        returns: [
            [[4, 2], true], [[4, 3], true], [[4, 4], true], [[4, 5], true], [[4, 6], true], [[4, 7], true],
            [[10, 2], false], [[10, 3], false], [[10, 4], false], [[10, 5], true], [[10, 6], true], [[10, 7], true],
            [[600, 2], false], [[600, 3], false], [[600, 4], false], [[600, 5], true], [[600, 6], true], [[600, 7], true],
            [[900, 2], false], [[900, 3], false], [[900, 4], false], [[900, 5], true], [[900, 6], true], [[900, 7], true],
            [[-10, 2], false], [[-10, 3], false], [[-10, 4], false], [[-10, 5], false], [[-10, 6], false], [[-10, 7], false],
            [[-600, 2], false], [[-600, 3], false], [[-600, 4], false], [[-600, 5], false], [[-600, 6], false], [[-600, 7], false],
            [[-900, 2], false], [[-900, 3], false], [[-900, 4], false], [[-900, 5], false], [[-900, 6], false], [[-900, 7], false],
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




