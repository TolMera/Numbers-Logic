const P_number_theory = require('number-theory');
const isSemiperfect = require("./isSemiperfect");

function isWeird(n) {
    if (n <= 0)
        return false;
    if (P_number_theory.isAbundant(n) && !isSemiperfect(n)) {
        return true;
    }
    return false;
};

module.exports = isWeird;
