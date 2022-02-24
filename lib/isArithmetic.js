const EnhancedNumber = require("../classes/enhancedNumber");
const divisors = require('./divisors');
const sum = require('./sum');

function isArithmetic(n) {
    n = EnhancedNumber(n);
    if (n._isArithmetic) {
        return n.isArithmetic;
    }

    if (n === 0) {
        n.isArithmetic = false;
        return n.isArithmetic;
    }
    if (n === 1 || n < 0) {
        n.isArithmetic = true;
        return n.isArithmetic;
    }

    const divs = divisors(n);
    const mean = sum(divs) / divs.length;
    if (Number.isInteger(mean)) {
        n.isArithmetic = true;
        return n.isArithmetic;
    }
    n.isArithmetic = false;
    return n.isArithmetic;
};

module.exports = isArithmetic;
