import {atk} from 'advanced-testing-kit';
import {generators} from '../node_modules/advanced-testing-kit/lib/numberGenerators';
import {isRound} from '../lib/isRound';

index();
function index() {
    let test = atk.makeTests(isRound, {
        returns: [
            [[0, 10], true], 
            [[1, 10], false], 
            [[2, 10], false],
            [[3, 10], false],
            [[4, 10], false],
            [[5, 10], false],
            [[6, 10], false],
            [[7, 10], false],
            [[8, 10], false],
            [[9, 10], false],
            [[10, 10], true],
            [[600, 10], true],
            [[900, 10], true],
            [[-10, 10], true],
            [[-600, 10], true],
            [[-900, 10], true],
        ],

        inputs: [
            [{
                type: Number,
                generator: generators.safePositiveInteger,
            }, {
                value: 2
            }],
            [{
                type: Number,
                generator: generators.safeNegativeInteger,
            }, {
                value: 2
            }],
            [{
                type: Number,
                generator: generators.safePositiveInteger,
            }, {
                value: 3
            }],
            [{
                type: Number,
                generator: generators.safeNegativeInteger,
            }, {
                value: 3
            }],
        ]
    });
    test();
}


