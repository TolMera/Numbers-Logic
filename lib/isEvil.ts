const isOdd = require("./isOdd");

function isEvil(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isEvil) {
        return n.isEvil;
    }

    let bits = 0;
    for (const bit of parseInt(n.number).toString(2)) {
        if (bit === "1") {
            bits++;
        }
    }
    n.isEvil = bits > 0 && isOdd(bits);
    return n.isEvil;
};

module.exports = isEvil;
