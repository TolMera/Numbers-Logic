const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isTetrahedral = require('../lib/isTetrahedral');

index();
function index() {
    let test = atk.makeTests(isTetrahedral, {
        returns: [
            [[220], true], [[220+1], !true],
            [[36180200], true], [[36180200+1], !true],
            [[121905300], true], [[121905300+1], !true],
            [[-120], true], [[-120+1], !true],
            [[-35820200], true], [[-35820200+1], !true],
            [[-121095300], true], [[-121095300+1], !true],
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


