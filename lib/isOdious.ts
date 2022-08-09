const isEvil = require("./isEvil");

function isOdious (n) {
    return !isEvil(n);
};

module.exports = isOdious;
