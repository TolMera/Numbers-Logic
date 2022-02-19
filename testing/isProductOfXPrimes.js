const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isProductOfXPrimes = require('../lib/isProductOfXPrimes');

index();
function index() {
    let test = atk.makeTests(isProductOfXPrimes, {
        returns: [
            [[10, 1], false],
            [[600, 1], false],
            [[900, 1], false],
            [[-10, 1], false],
            [[-600, 1], false],
            [[-900, 1], false],
            [[7, 1], true],
            [[599, 1], true],
            [[-7, 2], true],
            [[-599, 2], true]
        ],
        inputs: [
            [{
                type: Number,
                generator: generators.safePositiveInteger,
            }, {
                value: 1
            }],
            [{
                type: Number,
                generator: generators.safePositiveInteger,
            }, {
                value: 2
            }],
            [{
                type: Number,
                generator: generators.safePositiveInteger,
            }, {
                value: 3
            }],
            [{
                type: Number,
                generator: generators.safeNegativeInteger,
            }, {
                value: 1
            }],
            [{
                type: Number,
                generator: generators.safeNegativeInteger,
            }, {
                value: 2
            }],
            [{
                type: Number,
                generator: generators.safeNegativeInteger,
            }, {
                value: 3
            }],
        ]
    });
    test();
}

module.exports = index;
