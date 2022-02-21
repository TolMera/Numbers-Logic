const factorsOf = require('./factorsOf');

function isUnusual(n) {
    if (factorsOf(n).pop().prime > Math.sqrt(n)) {
        return true;
    }
    return false;
};

module.exports = isUnusual;
