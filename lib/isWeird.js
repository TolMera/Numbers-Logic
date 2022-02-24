const P_number_theory = require('number-theory');
/* Anything containing isSemiperfect has an extreme computation time */
const isSemiperfect = require("./isSemiperfect");

function isWeird(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isWeird) {
        return n.isWeird;
    }

    if (n.number <= 0) {
        n.isWeird = false;
        return n.isWeird;
    }
    if (P_number_theory.isAbundant(n)) {
        if (!isSemiperfect(n)) {
            n.isWeird = true;
            return n.isWeird;
        }
    }
    n.isWeird = false;
    return n.isWeird;
};

module.exports = isWeird;
