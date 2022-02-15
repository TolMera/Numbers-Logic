const factorsOf = require("./factorsOf");

const isSmooth = (n, N) => {
    const primeFactors = factorsOf(n);
    if (primeFactors.filter((value) => value > N).length === 0) {
        return true;
    }
    return false;
};

module.exports = isSmooth;
