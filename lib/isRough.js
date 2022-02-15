const factorsOf = require('./factorsOf');
const isOdd = require('./isOdd');

function isRough (n, k) {
    // Every odd positive integer is 3-rough.
    if (isOdd(n) && k < 3) {
        return true;
    }

    // Every positive integer is 2-rough, since all its prime factors, being prime numbers, exceed 1.
    if (k === 2 && n > 0)
        return true;

    const primeFactors = factorsOf(n);
    if (primeFactors.filter((value) => value <= k).length === 0) {
        return true;
    }
    return false;
};

module.exports = isRough;
