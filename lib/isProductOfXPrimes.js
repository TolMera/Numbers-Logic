const factorsOf = require('./factorsOf');

function isProductOfXPrimes(n, count) {
    if (factorsOf(n).length === count) {
        return true;
    }
    return false;
}

module.exports = isProductOfXPrimes;
