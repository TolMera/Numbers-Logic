const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isImpolite = require('../lib/isImpolite');

index();
function index() {
    let test = atk.makeTests(isImpolite, {
        returns: [
            [[1], false],
            [[2], false],
            [[4], false],
            [[-1], true],
            [[-2], true],
            [[-4], true],
            [[10], true],
            [[600], true],
            [[900], true],
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




