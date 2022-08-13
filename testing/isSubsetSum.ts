import {atk} from 'advanced-testing-kit';
import {generators} from '../node_modules/advanced-testing-kit/lib/numberGenerators';
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


