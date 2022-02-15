const factorsOf = require("./factorsOf");

function isPrime(n) {
    const factors = factorsOf(n);
    if (factors.length === 1 && factors[0].prime === n)
        return true;
    return false;
}

module.exports = isPrime;
