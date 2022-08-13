const EnhancedNumber = require("../classes/enhancedNumber");
const divisors = require('./divisors');
const getAliquotSum = require("./getAliquotSum");

// https://en.wikipedia.org/wiki/Abundant_number
function isAbundant(n) {
    n = EnhancedNumber(n);
    if (n._isAbundant) {
        return n.isAbundant;
    }

    // The smallest odd abundant number is 945.
    if (n.number === 1) {
        n.isAbundant = false;
        return n.isAbundant;
    }

    n.isAbundant = getAliquotSum(n) > n.number;
    return n.isAbundant;
};

module.exports = isAbundant;
