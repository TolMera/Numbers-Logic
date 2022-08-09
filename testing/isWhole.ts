const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isWhole = require('../lib/isWhole');

index();
function index() {
    let test = atk.makeTests(isWhole, {
        returns: [
            [[1], true],
            [[2], true],
            [[3], true],
            [[1.1], false],
            [[1.2], false],
            [[1.3], false],
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


