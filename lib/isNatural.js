// ISO80000 makes 0 an natural number
// https://en.wikipedia.org/wiki/ISO_80000-2

function isNatural(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isNatural) {
        return n.isNatural;
    }

    n.isNatural = Number.isInteger(n.number);
    return n.isNatural;
}

module.exports = isNatural;
