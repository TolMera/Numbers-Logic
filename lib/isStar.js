const getStar = require("./getStar");

function isStar(n) {
    let c = 1;
    while (true) {
        let nth = getStar(c);
        c = positiveOrNegativeSequence(n, nth, c);
        if (c === true || c === false) {
            return c;
        }
    }
}

module.exports = isStar;
