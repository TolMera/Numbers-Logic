const factorsOf = require('./factorsOf');

function isUnusual(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isUnusual) {
        return n.isUnusual;
    }

    if (factorsOf(n).pop().prime > Math.sqrt(n.number)) {
        n.isUnusual = true;
        return n.isUnusual;
    }
    n.isUnusual = false;
    return n.isUnusual;
};

module.exports = isUnusual;
