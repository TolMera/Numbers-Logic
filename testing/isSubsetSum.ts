import {atk} from 'advanced-testing-kit';
import * as generators from 'advanced-testing-kit/lib/numberGenerators';
import {isSubsetSum} from '../lib/isSubsetSum';

index();
function index() {
    let test = atk.makeTests(isSubsetSum, {
        /* 
            Because of how complex this is, I am choosing not to test it at this time.
         */
    });
    test();
}


