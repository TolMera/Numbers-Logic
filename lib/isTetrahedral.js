const getTetrahedral = require("./getTetrahedral");
const positiveOrNegativeSequence = require("./positiveOrNegativeSequence");

function isTetrahedral(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isTetrahedral) {
        return n.isTetrahedral;
    }

    let c = 0;
    while (true) {
        let nth = getTetrahedral(c);
        c = positiveOrNegativeSequence(n.number, nth, c);
        if (c === true || c === false) {
            n.isTetrahedral = c;
            return n.isTetrahedral;
        }
    }
}

module.exports = isTetrahedral;
