/**
 * Determines whether an integer is 'perfect'.
 * @module numbers-logic
 * @author Bjorn Macintosh <bjorn.macintosh@gmail.com> (http://www.tolmera.com)
 */

const divisors = require('./divisors');
const sum = require('./sum');

function isPerfect(n) {
    if (n === 1) {
        return false
    }
    var divisorsOfNumber = divisors(n);
    divisorsOfNumber.pop();
    var sumOfDivisors = sum(divisorsOfNumber);
    return n === sumOfDivisors;
};

module.exports = isPerfect;
