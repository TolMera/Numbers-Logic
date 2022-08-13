const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const getTetrahedral = require('../lib/getTetrahedral');

index();
function index() {
    let test = atk.makeTests(getTetrahedral, {
        returns: [
            [[10], 220],
            [[600], 36180200],
            [[900], 121905300],
            [[-10], -120],
            [[-600], -35820200],
            [[-900], -121095300],
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




