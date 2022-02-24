const getStar = require("./getStar");
const positiveOrNegativeSequence = require("./positiveOrNegativeSequence");

function isStar(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isStar) {
        return n.isStar;
    }

    let c = 1;
    while (true) {
        let nth = getStar(c);
        c = positiveOrNegativeSequence(n.number, nth, c);
        if (c === true || c === false) {
            n.isStar = c;
            return n.isStar;
        }
    }
}

module.exports = isStar;
