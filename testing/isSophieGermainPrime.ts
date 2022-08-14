import {atk} from 'advanced-testing-kit';
import * as generators from 'advanced-testing-kit/lib/numberGenerators';
import {isSophieGermainPrime} from '../lib/isSophieGermainPrime';

index();
function index() {
    let test = atk.makeTests(isSophieGermainPrime, {
        returns: [
            [[2], true], [[2+1], true], 
            [[3], true], [[3+1], !true], 
            [[5], true], [[5+1], !true], 
            [[11], true], [[11+1], !true], 
            [[23], true], [[23+1], !true], 
            [[29], true], [[29+1], !true], 
            [[41], true], [[41+1], !true], 
            [[53], true], [[53+1], !true], 
            [[83], true], [[83+1], !true], 
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


