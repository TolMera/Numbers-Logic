const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const getPoliteness = require('../lib/getPoliteness');

index();
function index() {
    let test = atk.makeTests(getPoliteness, {
        returns: [
            [[10], 1],
            [[600], 5],
            [[900], 8],
            [[-10], 0],
            [[-600], 0],
            [[-900], 0],
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




