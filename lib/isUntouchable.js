const divisors = require('./divisors')
const getAliquotSum = require('./getAliquotSum');

function isUntouchable(n) {
    // Notes:
    // for a semiprime number pq, the aliquot sum is p + q + 1.

    // n * 2 as the ceiling is a guess
    for (let x = 1; x <= n * 3; x++) {
        if (getAliquotSum(x) === n) {
            return false;
        }
    }
    return true;
};

module.exports = isUntouchable;
