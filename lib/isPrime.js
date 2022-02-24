const factorsOf = require("./factorsOf");

function isPrime(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isPrime) {
        return n.isPrime;
    }

    const factors = factorsOf(n);
    if (
        (factors.length === 1)
        && (factors[0].prime === n.number)
    ) {
        n.isPrime = true;
        return n.isPrime;
    }
    n.isPrime = false;
    return n.isPrime;
}

module.exports = isPrime;
