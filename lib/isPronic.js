function isPronic(n) {
    for (var i = 0; i <= parseInt(Math.sqrt(n)); i++) {
        if (n == i * (i + 1)) {
            return true;
        }
    }

    return false;
};

module.exports = isPronic;
