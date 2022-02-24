const factorsOf = require('./factorsOf');

function isPowerSmooth(n, k) {

    const factors = factorsOf(n).map((value) => Math.pow(value.prime, value.power));
    if (factors.filter((v) => v > k).length === 0) {
        return true;
    }
    return false;
};

module.exports = isPowerSmooth;
