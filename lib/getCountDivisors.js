const EnhancedNumber = require('../classes/enhancedNumber');
const factorsOf = require('./factorsOf');

// Insperation derived from:
// https://www2.math.upenn.edu/~deturck/m170/wk2/numdivisors.html
function getCountDivisors(n) {
    n = EnhancedNumber(n);
    if (n._getCountDivisors) {
        return n.getCountDivisors;
    }

    let factors;
    if (n.number > 0) {
        factors = factorsOf(n);
    } else {
        factors = factorsOf(Math.abs(n.number));
    }

    const powers = factors.map(factor => factor.power);
    let divisors = 1;
    for (const num of powers) {
        divisors *= num + 1;
    }
    if (n.number < 0) {
        divisors *= 2;
    }
    n.getCountDivisors = divisors;
    return n.getCountDivisors;
};

module.exports = getCountDivisors;
