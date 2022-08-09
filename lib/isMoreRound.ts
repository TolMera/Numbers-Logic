function isMoreRound(n1, n2, base1 = 10, base2 = 10) {
    const n1InBase = Math.abs(Number(n1)).toString(base1);
    const n2InBase = Math.abs(Number(n2)).toString(base2);
    const n1string = Array.from(n1InBase).reverse();
    const n2string = Array.from(n2InBase).reverse();

    for (let c = 0; c < (n1string.length | n2string.length) ; c++) {
        if (n1string[c] === '0' && n2string[c] === '0') {
            continue;
        }
        if (n1string[c] === '0' && n2string[c] !== '0') {
            return 1;
        }
        if (n1string[c] !== '0' && n2string[c] === '0') {
            return -1;
        }
        break;
    }

    return 0;
};

module.exports = isMoreRound;
