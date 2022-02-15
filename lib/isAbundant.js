const divisors = require('./divisors');

// https://en.wikipedia.org/wiki/Abundant_number
function isAbundant (n) {
    // The smallest odd abundant number is 945.
    if (n === 1) {
        return false;
    }
    var divisorsOfNumber = divisors(n);
    // to remove n and leave the 'proper divisors'
    divisorsOfNumber.pop();
    var sumOfDivisors = divisorsOfNumber.reduce(function (a, b) {
        return a + b;
    });
    return n < sumOfDivisors;
};

module.exports = isAbundant;
