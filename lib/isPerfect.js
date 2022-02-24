/**
 * Determines whether an integer is 'perfect'.
 * @module numbers-logic
 * @author Bjorn Macintosh <bjorn.macintosh@gmail.com> (http://www.tolmera.com)
 */

const divisors = require('./divisors');
const sum = require('./sum');

function isPerfect(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isPerfect) {
        return n.isPerfect;
    }

    if (n.number === 1) {
        n.isPerfect = false;
        return n.isPerfect;
    }
    var divisorsOfNumber = divisors(n);
    divisorsOfNumber.pop();
    var sumOfDivisors = sum(divisorsOfNumber);
    n.isPerfect = n === sumOfDivisors;
    return n.isPerfect;
};

module.exports = isPerfect;
