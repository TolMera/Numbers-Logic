import {atk} from 'advanced-testing-kit';
import {generators} from '../node_modules/advanced-testing-kit/lib/numberGenerators';
import {getStar} from '../lib/getStar';

index();
function index() {
    let test = atk.makeTests(getStar, {
        returns: [
            [[10], 541],
            [[600], 2156401],
            [[900], 4854601],
            [[-10], 661],
            [[-600], 2163601],
            [[-900], 4865401],
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




