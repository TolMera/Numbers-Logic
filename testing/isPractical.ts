import {atk} from 'advanced-testing-kit';
import {generators} from '../node_modules/advanced-testing-kit/lib/numberGenerators';
import {isPractical} from '../lib/isPractical';

index();
function index() {
    let test = atk.makeTests(isPractical, {
        returns: [
            [[2], true],
            [[10], false],
            // [[600], true],
            // [[900], true],
            [[-10], true],
            // [[-600], false],
            // [[-900], false],
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




