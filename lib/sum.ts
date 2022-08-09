function sum(itterable) {
    const array = Array.from(itterable);
    if (array.length) {
        return array.reduce((a, b) => a + b);
    }
}

module.exports = sum;