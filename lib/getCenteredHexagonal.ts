const EnhancedNumber = require('../classes/enhancedNumber');

function getCenteredHexagonal(n) {
    n = EnhancedNumber(n);
    if (n._getCenteredHexagonal) {
        return n.getCenteredHexagonal;
    }

    n.getCenteredHexagonal = 3 * n * (n - 1) + 1;
    return n.getCenteredHexagonal;
};

module.exports = getCenteredHexagonal;
