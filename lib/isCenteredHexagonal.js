const getCenteredHexagonal = require("./getCenteredHexagonal");

function isCenteredHexagonal(n) {
    let c = 1;
    while (true) {
        let nth = getCenteredHexagonal(c);
        if (n === nth)
            return true;
        if (n < nth)
            return false;
        // if (n > nth) continue;
        c++;
    }
}

module.exports = isCenteredHexagonal;
