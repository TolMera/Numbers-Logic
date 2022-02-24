const EnhancedNumber = require("../classes/enhancedNumber");

function getTetrahedral(n) {
    n = EnhancedNumber(n);
    if (n._getTetrahedral) {
        return n.getTetrahedral;
    }

    n.getTetrahedral = (n * (n + 1) * (n + 2)) / 6;
    return n.getTetrahedral;
}

module.exports = getTetrahedral;
