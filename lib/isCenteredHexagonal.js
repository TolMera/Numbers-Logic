const getCenteredHexagonal = require("./getCenteredHexagonal");
const positiveOrNegativeSequence = require("./positiveOrNegativeSequence");

function isCenteredHexagonal(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isCenteredHexagonal) {
        return n.isCenteredHexagonal;
    }

    let c = 1;
    while (true) {
        let nth = getCenteredHexagonal(c);
        c = positiveOrNegativeSequence(n.number, nth, c);
        if (c === true || c === false) {
            n.isCenteredHexagonal = c;
            return n.isCenteredHexagonal;
        }
    }
}

module.exports = isCenteredHexagonal;
