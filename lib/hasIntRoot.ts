const EnhancedNumber = require("../classes/enhancedNumber");
// Has an integer as a root power, 9 should have 3^3

function hasIntRoot(n) {
    n = EnhancedNumber(n);
    if (n._hasIntRoot) {
        return n.hasIntRoot;
    }

    for (let c = 2; c <= Math.sqrt(n.number); c++) {
        if (Number.isInteger(Math.pow(n.number, 1 / c))) {
            n.hasIntRoot = true;
            return n.hasIntRoot;
        }
    }
    n.hasIntRoot = false;
    return n.hasIntRoot;
};

module.exports = hasIntRoot;
