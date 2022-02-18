const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isPractical = require('../lib/isPractical');

index();
function index() {
    let test = atk.makeTests(isPractical, {
        returns: [
            [[2], true],
            [[10], false],
            // [[600], true],
            // [[900], true],
            [[-10], true],
            // [[-600], false],
            // [[-900], false],
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

module.exports = index;


