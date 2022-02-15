const P_numbers = require('numbers');
const divisors = require('./divisors');

function isArithmetic (n)  {
    if (n === 0)
        return false;
    if (n === 1)
        return true;

    // Can't get divisors of 0
    if (Number.isInteger(P_numbers.statistic.mean(divisors(n)))) {
        return true;
    }
    return false;
};

module.exports = isArithmetic;
