const getCenteredHexagonal = require("./getCenteredHexagonal");

function isCenteredHexagonal(n) {
    let c = 1;
    while (true) {
        let nth = getCenteredHexagonal(c);
        c = positiveOrNegativeSequence(n, nth, c);
        if (c === true || c === false) {
            return c;
        }
    }
}

module.exports = isCenteredHexagonal;
