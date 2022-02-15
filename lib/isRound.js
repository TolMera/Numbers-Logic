function isRound(n, base = 10) {
    const numberInBase = Number(n).toString(base);
    if (Array.from(numberInBase).reverse()[0] === "0") {
        return true;
    }
    return false;
};

module.exports = isRound;
