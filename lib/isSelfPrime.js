const isPrime = require("./isPrime");
const isSelf = require("./isSelf");

function isSelfPrime(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isSelfPrime) {
        return n.isSelfPrime;
    }

    if (isPrime(n) && isSelf(n)) {
        n.isSelfPrime = true;
        return n.isSelfPrime;
    }
    n.isSelfPrime = false;
    return n.isSelfPrime;
};

module.exports = isSelfPrime;
