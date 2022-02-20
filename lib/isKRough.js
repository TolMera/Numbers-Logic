// const isSmooth = require('./isSmooth');
const isRough = require('./isRough');
function isKRough(n, k) {
    return isRough(n, k);
    // if (n < 0) {
    //     return false;
    // }
    // return !isSmooth(n, k);
};

module.exports = isKRough;
