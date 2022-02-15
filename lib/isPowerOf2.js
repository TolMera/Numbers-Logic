function isPowerOf2 (n) {
    return (n & n - 1) === 0;
}

module.exports = isPowerOf2;
