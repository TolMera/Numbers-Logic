// k log n = x is the same as k^x === n

function logX(n, k, cache = false) {
    // if (cache) {
    //     return cacheLogX(cache, n, k);
    // }
    return Math.log(n) / Math.log(k);
};

// const cache = {};
// function cacheLogX(cache, n, k) {
//     const lnN = cache[n] || Math.log(n);
//     const lnK = cache[k] || Math.log(k);
//     if (!cache[n])
//         cache[n] = lnN;
//     if (!cache[k])
//         cache[k] = lnK;
//     return lnN / lnK;
// }

module.exports = logX;
