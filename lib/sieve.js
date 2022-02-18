/**
 * Sieves primes from 1 to the given number.
 * @param {Number} n Upper bound for the sieve.
 * @return {Array} A list of primes between 2 and n.
 * @module numbers-logic
 * @author Bjorn Macintosh <bjorn.macintosh@gmail.com> (http://tolmera.com)
 */
function sieve(n) {
    var primes = [2];
    let c = 2;
    while (++c <= n) {
        let sqrtC = Math.sqrt(c);
        let flag = true;

        for (const prime of primes) {
            if (prime > sqrtC)
                break;
            if (c % prime === 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            primes.push(c);
        }
    }
    return primes;
}

module.exports = sieve;
