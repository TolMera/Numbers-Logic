const EnhancedNumber = require("../classes/enhancedNumber");

function getTetrahedral(n) {
    n = EnhancedNumber(n);
    if (n._getTetrahedral) {
        return n.getTetrahedral;
    }

    n.getTetrahedral = (n.number * (n.number + 1) * (n.number + 2)) / 6;
    return n.getTetrahedral;
}

module.exports = getTetrahedral;
