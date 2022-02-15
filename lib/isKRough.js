const isSmooth = require('./isSmooth');
function isKRough(n, k) {
    return !isSmooth(n, k);
};

module.exports = isKRough;
