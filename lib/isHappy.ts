const sum = require('./sum');

function isHappy(n, base = 10) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isHappy) {
        return n.isHappy;
    }

    number = Math.abs(n.number);

    const theList = [];
    while (true) {
        number = sum(
            Array.from(number.toString(base))
                .map(number => Math.pow(parseInt(number, base), 2))
        );
        if (theList.includes(number)) {
            n.isHappy = false;
            return n.isHappy;
        }
        theList.push(number);

        if (number === 1) {
            n.isHappy = true;
            return n.isHappy;
        }
    }
}

module.exports = isHappy;
