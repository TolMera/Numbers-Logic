const isSmooth = require('./isSmooth');
function isKRough(n, k) {
    if (n < 0) {
        return false;
    }
    return !isSmooth(n, k);
};

module.exports = isKRough;
