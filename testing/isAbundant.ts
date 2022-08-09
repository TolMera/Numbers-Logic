const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isAbundant = require('../lib/isAbundant');

index();
function index() {
    let test = atk.makeTests(isAbundant, {
        returns: [
            [[10], false],
            [[600], true],
            [[900], true],
            [[-10], false],
            [[-600], false],
            [[-900], false],
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




