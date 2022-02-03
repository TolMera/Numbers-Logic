const isTetrahedral = (n) => {
    let c = 1;
    while (true) {
        let nth = getTetrahedral(c);
        if (n === nth)
            return true;
        if (n < nth)
            return false;
        // if (n > nth) continue;
        c++;
    }
};

const getTetrahedral = (n) => {
    return (n * (n + 1) * (n + 2)) / 6;
};

const isCenteredHexagonal = (n) => {
    let c = 1;
    while (true) {
        let nth = getCenteredHexagonal(c);
        if (n === nth)
            return true;
        if (n < nth)
            return false;
        // if (n > nth) continue;
        c++;
    }
};

const getCenteredHexagonal = (n) => {
    return 3 * n * (n - 1) + 1;
};

const isStar = (n) => {
    let c = 1;
    while (true) {
        let nth = getStar(c);
        if (n === nth)
            return true;
        if (n < nth)
            return false;
        // if (n > nth) continue;
        c++;
    }
};

const getStar = (n) => {
    return 6 * n * (n - 1) + 1;
};

module.exports = {
    isTetrahedral,
    getTetrahedral,
    isCenteredHexagonal,
    getCenteredHexagonal,
    isStar,
    getStar,
}
