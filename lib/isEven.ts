const EnhancedNumber = require('../classes/enhancedNumber');

function isEven(n) {
    n = EnhancedNumber(n);
    if (n._isEven) {
        return n.isEven;
    }

    n.isEven = (n & 0b1) === 0;
    return n.isEven;
};

module.exports = isEven;
