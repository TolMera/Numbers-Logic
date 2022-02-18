const factorsOf = require("./factorsOf");

const isSmooth = (n, k) => {
    const primeFactors = factorsOf(n);
    const factorsGreaterThanK = primeFactors.filter((value) => {
        return value.prime > k
    });
    if (factorsGreaterThanK.length > 0) {
        return true;
    }
    return false;
};

module.exports = isSmooth;
