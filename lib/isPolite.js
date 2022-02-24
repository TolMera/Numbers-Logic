const isPowerOf2 = require("./isPowerOf2");

// https://en.wikipedia.org/wiki/Polite_number
function isPolite(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isPolite) {
        return n.isPolite;
    }

    n.isPolite = isPowerOf2(n);
    return n.isPolite;
};

module.exports = isPolite;
