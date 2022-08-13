const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const getAliquotSum = require('../lib/getAliquotSum');

index();
process.exit();
/* 

*/
function index() {
    let test = atk.makeTests(getAliquotSum, {
        returns: [
            [[10], 8],
            [[600], 1260],
            [[900], 1921],
            [[-10], -10],
            [[-600], -600],
            [[-900], -900],
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
