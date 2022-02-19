// This one is too complicated for me to follow.  It needs a better explanation
function isSubsetSum(set, n, sum) {
    // The value of subset[i][j] will be true if
    // there is a subset of set[0..j-1] with sum
    // equal to i
    var subset = Array.from(Array(n + 1), () => Array(sum + 1));

    // If sum is 0, then answer is true
    for (var i = 0; i <= n; i++) {
        subset[i][0] = true;
    }

    // If sum is not 0 and set is empty,
    // then answer is false
    for (var i = 1; i <= sum; i++) {
        subset[0][i] = false;
    }

    // Fill the subset table in bottom up manner
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= sum; j++) {
            if (j < set[i - 1]) {
                subset[i][j] = subset[i - 1][j];
            }
            if (j >= set[i - 1]) {
                subset[i][j] = subset[i - 1][j] || subset[i - 1][j - set[i - 1]];
            }
        }
    }
    return subset[n][sum];
}

module.exports = isSubsetSum;