const sum = require('./sum');

function isHappy(number, base = 10, repeat = 1000) {
    number = Math.abs(number);
    const numbers = [];
    while (true) {
        numbers.push(number);
        if (repeat-- === 0) {
            return numbers;
        }

        number = sum(
            Array.from(number.toString(base))
                .map((number) => Math.pow(parseInt(number, base), 2))
        );

        if (number === 1) {
            return true;
        } else if (number === 4) {
            return false;
        }
    }
}

module.exports = isHappy;
