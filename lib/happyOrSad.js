const isHappy = (number, base=10) => {
    while (number !== 1 && number !== 4) {
        number = Array.from(number.toString(base))
        .map((number) => Math.pow(parseInt(number, base), 2))
        .reduce((previous, current) => previous + current);
    }
    if (number === 1) {
        return true;
    } else if (number === 4) {
        return false;
    }
};

const isSad = (number, base=10) => {
    return !isHappy(number, base);
};

module.exports = {
    isHappy,
    isSad
}