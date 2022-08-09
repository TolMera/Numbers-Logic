const isNatural = require("./isNatural");

function isWhole(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isWhole) {
        return n.isWhole;
    }

    if (n > 0) {
        n.isWhole = isNatural(n);
        return n.isWhole;
    }
    n.isWhole = false;
    return n.isWhole;
};

module.exports = isWhole;
