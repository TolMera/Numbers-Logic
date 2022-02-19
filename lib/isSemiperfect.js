const isAbundant = require('./isAbundant');
const isPerfect = require('./isPerfect');
const isPowerOf2 = require('./isPowerOf2');
const isPractical = require("./isPractical");
const SemiperfectTest = require('./SemiperfectTest');
const getAliquotSum = require('./getAliquotSum');

function isSemiperfect(n) {
    if (n <= 1) {
        return false;
    }

    if (getAliquotSum(n) === n) {
        // This is a PERFECT number - that also makes it semi-perfect?
        return true;
    }

    if (isPractical(n) && !isPowerOf2(n)) {
        return true;
    }

    if (isPerfect(n) || isAbundant(n)) {
        return SemiperfectTest(n);
    }
    return false;
};

module.exports = isSemiperfect;
