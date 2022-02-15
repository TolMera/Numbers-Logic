const factorsOf = require('./factorsOf');

function isUnusual(n) {
    const primeFactors = factorsOf(n);
    if (Math.max(...(primeFactors.map(v => v.prime))) > Math.sqrt(n)) {
        return true;
    }
    return false;
};

module.exports = isUnusual;
