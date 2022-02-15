const isHappy = require("./isHappy");

function isSad(number, base = 10) {
    return !isHappy(number, base);
}

module.exports = isSad;
