const isMoreRound = (n1, n2, base1 = 10, base2 = 10) => {
    const n1InBase = Number(n1).toString(base1);
    const n2InBase = Number(n1).toString(base2);
    const n1string = Array.from(n1InBase).reverse()[0];
    const n2string = Array.from(n2InBase).reverse()[0];

    for (let c = 0; c < n1string.length; c++) {
        if (n1string[c] === '0' && n2string === '0')
            continue;
        if (n1string[c] === '0' && n2string !== '0') {
            return 1;
        }
        if (n1string[c] !== '0' && n2string === '0') {
            return -1;
        }
        break;
    }
    return 0;
};
