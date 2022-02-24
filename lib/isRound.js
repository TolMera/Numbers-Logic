function isRound(n, base = 10) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isRound?.[base]) {
        return n._isRound[base];
    }

    const numberInBase = Number(n.number).toString(base);
    if (Array.from(numberInBase).reverse()[0] === "0") {
        n._isRound[base] = true;
        return n._isRound[base];
    }
    n._isRound[base] = false;
    return n._isRound[base];
};

module.exports = isRound;
