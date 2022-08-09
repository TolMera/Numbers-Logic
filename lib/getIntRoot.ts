const EnhancedNumber = require('../classes/enhancedNumber');

function getIntRoot(n) {
    n = EnhancedNumber(n);
    if (n._getIntRoot) {
        return n.getIntRoot;
    }

    for (let c = 2; c <= Math.sqrt(n.number); c++) {
        let root = Math.pow(n.number, 1 / c);
        if (Number.isInteger(root)) {
            n.getIntRoot = c;
            return n.getIntRoot;
        }
    }
    n.getIntRoot = false;
    return n.getIntRoot;
};

module.exports = getIntRoot;
