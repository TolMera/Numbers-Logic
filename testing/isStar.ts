import {atk} from 'advanced-testing-kit';
import {generators} from '../node_modules/advanced-testing-kit/lib/numberGenerators';
import {isStar} from '../lib/isStar';

index();
function index() {
    let test = atk.makeTests(isStar, {
        returns: [
            [[541], true], [[541+1], !true],
            [[2156401], true], [[2156401+1], !true],
            [[4854601], true], [[4854601+1], !true],
            [[661], true], [[661+1], !true],
            [[2163601], true], [[2163601+1], !true],
            [[4865401], true], [[4865401+1], !true],
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




