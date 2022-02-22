const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isWeird = require('../lib/isWeird');

index();
function index() {
    let test = atk.makeTests(isWeird, {
        returns: [
            [[70], true], [[70 + 1], false],
            [[836], true], [[836 + 1], false],
            [[4030], true], [[4030 + 1], false],
            [[5830], true], [[5830 + 1], false],
            [[7192], true], [[7192 + 1], false],
            [[7912], true], [[7912 + 1], false],
            [[9272], true], [[9272 + 1], false],
            [[10792], true], [[10792 + 1], false],
            [[17272], true], [[17272 + 1], false],
            [[45356], true], [[45356 + 1], false],
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




