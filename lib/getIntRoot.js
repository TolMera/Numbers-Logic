function getIntRoot(n) {
    for (let c = 2; c <= Math.sqrt(n); c++) {
        let root = Math.pow(n, 1 / c);
        if (Number.isInteger(root)) {
            return c;
        }
    }
    return false;
};

module.exports = getIntRoot;
