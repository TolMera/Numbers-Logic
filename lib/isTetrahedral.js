const getTetrahedral = require("./getTetrahedral");

function isTetrahedral(n) {
    let c = 1;
    while (true) {
        let nth = getTetrahedral(c);
        if (n === nth)
            return true;
        if (n < nth)
            return false;
        // if (n > nth) continue;
        c++;
    }
}

module.exports = isTetrahedral;
