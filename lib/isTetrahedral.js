const getTetrahedral = require("./getTetrahedral");
const positiveOrNegativeSequence = require("./positiveOrNegativeSequence");

function isTetrahedral(n) {
    let c = 0;
    while (true) {
        let nth = getTetrahedral(c);
        c = positiveOrNegativeSequence(n, nth, c);
        console.log(c);
        if (c === true || c === false) {
            return c;
        }
    }
}

module.exports = isTetrahedral;
