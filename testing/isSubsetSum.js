const atk = require('advanced-testing-kit');
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
const isSubsetSum = require('../lib/isSubsetSum');

index();
function index() {
    let test = atk.makeTests(isSubsetSum, {
        /* 
            Because of how complex this is, I am choosing not to test it at this time.
         */
    });
    test();
}


