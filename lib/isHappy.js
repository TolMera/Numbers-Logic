const sum = require('./sum');

function isHappy(number, base = 10) {
    number = Math.abs(number);

    const theList = [];
    while (true) {
        number = sum(
            Array.from(number.toString(base))
                .map(number => Math.pow(parseInt(number, base), 2))
        );
        if (theList.includes(number)) {
            return false;
        }
        theList.push(number);

        if (number === 1) {
            return true;
        }
    }
}

module.exports = isHappy;
