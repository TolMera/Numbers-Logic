const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isOdd = require('../lib/isOdd');

index();
function index() {
    let test = atk.makeTests(isOdd, {
        returns: [
            [[10], false],
            [[600], false],
            [[900], false],
            [[-10], false],
            [[-600], false],
            [[-900], false],
            [[11], true],
            [[601], true],
            [[901], true],
            [[-11], true],
            [[-601], true],
            [[-901], true],
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




