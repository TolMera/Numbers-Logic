function isNatural(n) {
    // https://en.wikipedia.org/wiki/ISO_80000-2
    // ISO80000 makes 0 an natural number
    return Number.isInteger(n);
}

module.exports = isNatural;
