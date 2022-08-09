const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const getIntRoot = require('../lib/getIntRoot');

index();
function index() {
    let test = atk.makeTests(getIntRoot, {
        returns: [
            [[10], false],
            [[600], false],
            [[900], 2],
            [[-10], false],
            [[-600], false],
            [[-900], false],
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




