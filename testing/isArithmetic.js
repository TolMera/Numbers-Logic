const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isArithmetic = require('../lib/isArithmetic');

index();
function index() {
    let test = atk.makeTests(isArithmetic, {
        returns: [
            [[6], true],
            [[10], false],
            [[600], false],
            [[900], false],
            [[-6], true],
            [[-10], true],
            [[-600], true],
            [[-900], true],
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




