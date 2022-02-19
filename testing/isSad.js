const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isSad = require('../lib/isSad');

index();
function index() {
    let test = atk.makeTests(isSad, {
        returns: [
            [[1, 6], false],
            [[1 + 1, 6], true],
            [[6, 6], false],
            [[6 + 1, 6], true],
            [[36, 6], false],
            [[36 + 1, 6], true],
            [[44, 6], false],
            [[44 + 1, 6], true],
            [[49, 6], false],
            [[49 + 1, 6], true],
            [[79, 6], false],
            [[79 + 1, 6], true],
            [[100, 6], false],
            [[100 + 1, 6], true],
            [[160, 6], false],
            [[160 + 1, 6], true],
            [[170, 6], false],
            [[170 + 1, 6], true],
            [[216, 6], false],
            [[216 + 1, 6], true],
            [[224, 6], false],
            [[224 + 1, 6], true],
            [[229, 6], false],
            [[229 + 1, 6], true],
            [[254, 6], false],
            [[254 + 1, 6], true],
            [[1, 10], false],
            [[1 + 1, 10], true],
            [[7, 10], false],
            [[7 + 1, 10], true],
            [[10, 10], false],
            [[10 + 1, 10], true],
            [[13, 10], false],
            [[13 + 1, 10], true],
            [[19, 10], false],
            [[19 + 1, 10], true],
            [[23, 10], false],
            [[23 + 1, 10], true],
            [[28, 10], false],
            [[28 + 1, 10], true],
            [[31, 10], false],
            [[31 + 1, 10], false], // Odd one out, the next number is also happy
            [[32, 10], false],
            [[32 + 1, 10], true],
            [[44, 10], false],
            [[44 + 1, 10], true],

        ],
        inputs: [
            // All numbers in base 4 are happy numbers
            [{
                type: Number,
                generator: generators.safePositiveInteger,
            }, {
                value: 4
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


