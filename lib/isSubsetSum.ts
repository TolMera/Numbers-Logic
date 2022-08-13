/* 
SPECIAL NOTES:

This is a serious computational problem.
I also had to tackle this when solving 'isSemiperfect'
I think we can approach this using the same method as `isSemiperfect` however, there's no guarantee that what I have in `inSemiperfect` is flawless.
As such, I'm writing this note, if anyone takes a shot at it.

Good luck
*/

import { EnhancedNumber } from "../classes/enhancedNumber";

// This one is too complicated for me to follow.  It needs a better explanation
export function isSubsetSum(set, n, sum) {
    console.warn("Any function using isSubsetSum is likely to lag significantly");

    n = new EnhancedNumber(n);

    // The value of subset[i][j] will be true if
    // there is a subset of set[0..j-1] with sum
    // equal to i
    var subset = Array.from(Array(n.number + 1), () => Array(sum + 1));

    // If sum is 0, then answer is true
    for (var i = 0; i <= n.number; i++) {
        subset[i][0] = true;
    }

    // If sum is not 0 and set is empty,
    // then answer is false
    for (var i = 1; i <= sum; i++) {
        subset[0][i] = false;
    }

    // Fill the subset table in bottom up manner
    for (var i = 1; i <= n.number; i++) {
        for (var j = 1; j <= sum; j++) {
            if (j < set[i - 1]) {
                subset[i][j] = subset[i - 1][j];
            }
            if (j >= set[i - 1]) {
                subset[i][j] = subset[i - 1][j] || subset[i - 1][j - set[i - 1]];
            }
        }
    }
    return subset[n.number][sum];
}
