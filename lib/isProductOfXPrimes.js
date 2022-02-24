const factorsOf = require('./factorsOf');

function isProductOfXPrimes(n, k) {
    if (factorsOf(n).length === k) {
        return true;
    }
    return false;
}

module.exports = isProductOfXPrimes;
