const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isOdious = require('../lib/isOdious');

index();
function index() {
    let test = atk.makeTests(isOdious, {
        returns: [
            [[10], true],
            [[600], true],
            [[900], true],
            [[-10], true],
            [[-600], true],
            [[-900], true],
            [[-986497], false],
            [[149408], false],
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




