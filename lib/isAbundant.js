const EnhancedNumber = require("../classes/enhancedNumber");
const divisors = require('./divisors');

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
    var divisorsOfNumber = divisors(n);
    // to remove n and leave the 'proper divisors'
    divisorsOfNumber.pop();
    var sumOfDivisors = divisorsOfNumber.reduce(function (a, b) {
        return a + b;
    });
    n.isAbundant = n < sumOfDivisors;
    return n.isAbundant;
};

module.exports = isAbundant;
