const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isUntouchable = require('../lib/isUntouchable');

index();
function index() {
    let test = atk.makeTests(isUntouchable, {
        returns: [
            [[2], true], [[2+1], !true], 
            [[5], true], [[5+1], !true], 
            [[52], true], [[52+1], !true], 
            [[88], true], [[88+1], !true], 
            [[96], true], [[96+1], !true], 
            [[120], true], [[120+1], !true], 
            [[124], true], [[124+1], !true], 
            [[146], true], [[146+1], !true], 
            [[162,], true], [[162+1,], !true], 
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

module.exports = index;


