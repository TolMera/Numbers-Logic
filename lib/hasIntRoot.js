// Has an integer as a root power, 9 should have 3^3
function hasIntRoot(n) {
    for (let c = 2; c <= Math.sqrt(n); c++) {
        let root = Math.pow(n, 1 / c);
        if (Number.isInteger(root)) {
            return true;
        }
    }
    return false;
};

module.exports = hasIntRoot;
