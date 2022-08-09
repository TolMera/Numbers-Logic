function positiveOrNegativeSequence(n, nth, c) {
    if (n < 0) {
        if (n === nth) {
            return true;
        }
        if (n > nth) {
            return false;
        }
        c -= 1;
    }
    else {
        if (n === nth) {
            return true;
        }
        if (n < nth) {
            return false;
        }
        c += 1;
    }
    return c;
}

module.exports = positiveOrNegativeSequence;
