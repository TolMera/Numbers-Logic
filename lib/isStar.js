const getStar = require("./getStar");

function isStar(n) {
    let c = 1;
    while (true) {
        let nth = getStar(c);
        if (n === nth)
            return true;
        if (n < nth)
            return false;
        // if (n > nth) continue;
        c++;
    }
}

module.exports = isStar;
