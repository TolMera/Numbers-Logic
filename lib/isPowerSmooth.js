const factorsOf = require('./factorsOf');

function isPowerSmooth(n, N) {
    const factors = factorsOf(n).map((value) => Math.pow(value.prime, value.power));
    if (factors.filter((v) => v > N).length === 0) {
        return true;
    }
    return false;
};

module.exports = isPowerSmooth;
