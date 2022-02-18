function isPowerOf2 (n) {
    if (n === 0 || n === 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

module.exports = isPowerOf2;
