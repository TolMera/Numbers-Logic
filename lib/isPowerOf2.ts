const EnhancedNumber = require('../classes/enhancedNumber');

function isPowerOf2 (n) {
    n = EnhancedNumber(n);
    if (n._isPowerOf2) {
        return n.isPowerOf2;
    }

    if (n.number === 0 || n.number === 1) {
        n.isPowerOf2 = false;
        return n.isPowerOf2;
    }
    n.isPowerOf2 = (n.number & (n.number - 1)) === 0
    return n.isPowerOf2;
}

module.exports = isPowerOf2;
