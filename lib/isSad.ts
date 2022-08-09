const isHappy = require("./isHappy");

function isSad(n, base = 10) {
    return !isHappy(n, base);
}

module.exports = isSad;
