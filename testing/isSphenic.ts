import {atk} from 'advanced-testing-kit';
import {generators} from '../node_modules/advanced-testing-kit/lib/numberGenerators';
import {isSphenic} from '../lib/isSphenic';

index();
function index() {
    let test = atk.makeTests(isSphenic, {
        returns: [
            [[30], true], [[30+1], !true],
            [[42], true], [[42+1], !true],
            [[66], true], [[66+1], !true],
            [[70], true], [[70+1], !true],
            [[78], true], [[78+1], !true],
            [[102], true], [[102+1], !true],
            [[105], true], [[105+1], !true],
            [[110,], true], [[110+1,], !true],
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




