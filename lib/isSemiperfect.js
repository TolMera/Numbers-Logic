const isAbundant = require('./isAbundant');
const isPerfect = require('./isPerfect');
const isPowerOf2 = require('./isPowerOf2');
const isPractical = require("./isPractical");
const semiperfectTest = require('./semiperfectTest');
const getAliquotSum = require('./getAliquotSum');

/* Anything containing isSemiperfect has an extreme computation time */
function isSemiperfect(n) {
    console.warn("Any function using isSemiperfect is likely to lag significantly");

    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isSemiperfect) {
        return n.isSemiperfect;
    }

    if (n.number <= 1) {
        n.isSemiperfect = false;
        return n.isSemiperfect;
    }

    if (getAliquotSum(n) === n.number) {
        // This is a PERFECT number - that also makes it semi-perfect?
        n.isSemiperfect = true;
        return n.isSemiperfect;
    }

    if (isPractical(n) && !isPowerOf2(n)) {
        n.isSemiperfect = true;
        return n.isSemiperfect;
    }

    if (isPerfect(n) || isAbundant(n)) {
        n.isSemiperfect = semiperfectTest(n);
        return n.isSemiperfect;
    }
    n.isSemiperfect = false;
    return n.isSemiperfect;
};

module.exports = isSemiperfect;
