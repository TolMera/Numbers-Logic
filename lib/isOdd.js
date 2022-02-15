const { isEven } = require("./isEven");

function isOdd(n) {
    return !isEven(n);
};

module.exports = isOdd;
