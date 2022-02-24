// const divisors = require('./divisors');
const factorsOf = require('./factorsOf');
const getCountDivisors = require('./getCountDivisors');

function isSphenic(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isSphenic) {
        return n.isSphenic;
    }

    if (n.number <= 0) {
        n.isSphenic = false;
        return n.isSphenic;
    }
    if (n.number === 1) {
        n.isSphenic = false;
        return n.isSphenic;
    }

    if (getCountDivisors(n) === 8) {
        if (factorsOf(n).length === 3) {
            n.isSphenic = true;
            return n.isSphenic;
        }
    }
    n.isSphenic = false;
    return n.isSphenic;
};

module.exports = isSphenic;
