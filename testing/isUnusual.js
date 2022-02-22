const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isUnusual = require('../lib/isUnusual');

index();
function index() {
    let test = atk.makeTests(isUnusual, {
        returns: [
            [[2], true],
            [[3], true], [[3 + 1], false],
            [[5], true],
            [[6], true],
            [[7], true], [[7 + 1], false],
            [[10], true],
            [[11], true], [[11 + 1], false],
            [[13], true],
            [[14], true],
            [[15], true], [[15 + 1], false],
            [[17], true], [[17 + 1], false],
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




