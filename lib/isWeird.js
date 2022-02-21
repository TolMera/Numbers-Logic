const P_number_theory = require('number-theory');
/* Anything containing isSemiperfect has an extreme computation time */
const isSemiperfect = require("./isSemiperfect");

function isWeird(n) {
    if (n <= 0) {
        return false;
    }
    if (P_number_theory.isAbundant(n)) {
        if (!isSemiperfect(n)) {
            return true;
        }
    }
    return false;
};

module.exports = isWeird;
