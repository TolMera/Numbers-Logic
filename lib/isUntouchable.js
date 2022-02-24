const divisors = require('./divisors')
const getAliquotSum = require('./getAliquotSum');

function isUntouchable(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isUntouchable) {
        return n.isUntouchable;
    }

    // Notes:
    // for a semiprime number pq, the aliquot sum is p + q + 1.

    // n * 2 as the ceiling is a guess
    for (let x = 1; x <= n * 3; x++) {
        if (getAliquotSum(x) === n) {
            n.isUntouchable = false;
            return n.isUntouchable;
        }
    }
    n.isUntouchable = true;
    return n.isUntouchable;
};

module.exports = isUntouchable;
