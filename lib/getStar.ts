const EnhancedNumber = require("../classes/enhancedNumber");

function getStar(n) {
    n = EnhancedNumber(n);
    if (n._getStar) {
        return n.getStar;
    }

    n.getStar = 6 * n.number * (n.number - 1) + 1;
    return n.getStar;
}

module.exports = getStar;
