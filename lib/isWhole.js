const isNatural = require("./isNatural");

function isWhole(n) {
    if (n > 0) {
        return isNatural(n);
    }
    return false;
};

module.exports = isWhole;
