const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isNatural = require('../lib/isNatural');

index();
function index() {
    let test = atk.makeTests(isNatural, {
        returns: [
            [[10], true],
            [[600], true],
            [[900], true],
            [[-10], true],
            [[-600], true],
            [[-900], true],
            [[0.1], false],
            [[1.1], false],
            [[11.1], false],
            [[11.11], false],
        ],
        inputs: [
            [{
                type: Number,
                generator: generators.safePositiveInteger,
            }],
            [{
                type: Number,
                generator: generators.safeNegativeInteger,
            }],
            [{
                type:Number,
                generator: generators.randomFloat,
            }]

        ]
    });
    test();
}




