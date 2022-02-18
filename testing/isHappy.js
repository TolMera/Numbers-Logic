const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isHappy = require('../lib/isHappy');

index();
function index() {
    let test = atk.makeTests(isHappy, {
        returns: [
            [[10], true],
            [[600], false],
            [[900], false],
            [[-10], true],
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

module.exports = index;


