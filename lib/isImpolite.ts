const isPolite = require('./isPolite');

function isImpolite(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isImpolite) {
        return n.isImpolite;
    }
    
    n.isImpolite = !isPolite(n);
    return n.isImpolite;
};

module.exports = isImpolite;
