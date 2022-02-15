const P_number_theory = require('number-theory');
const isPowerOf2 = require('./isPowerOf2');
const isPractical = require("./isPractical");
const SemiperfectTest = require('./SemiperfectTest');

function isSemiperfect(n) {
    if (n <= 1)
        return false;

    if (isPractical(n) && !isPowerOf2(n)) {
        return true;
    }

    if (P_number_theory.isPerfect(n) || P_number_theory.isAbundant(n)) {
        return SemiperfectTest(n);
    }
    return false;
};

exports.isSemiperfect = isSemiperfect;
