import {atk} from 'advanced-testing-kit';
import {generators} from '../node_modules/advanced-testing-kit/lib/numberGenerators';
import {isPrime} from '../lib/isPrime';

index();
function index() {
    let test = atk.makeTests(isPrime, {
        returns: [
            [[10], false],
            [[600], false],
            [[900], false],
            [[-10], false],
            [[-600], false],
            [[-900], false],
            [[2], true],
            [[3], true],
            [[5], true],
            [[7], true],
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


