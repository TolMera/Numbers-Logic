const divisors = require('./divisors');

function SemiperfectTest(n) {
    if (n === 0)
        return false;
    let v = [];

    // find the divisors
    v = divisors(n);

    // sorting the vector
    v.sort(function (a, b) { return a - b; });

    let r = v.length;

    // subset to check if no
    // is semiperfect
    let subset = new Array(r + 1);
    for (let i = 0; i < r + 1; i++) {
        subset[i] = new Array(n + 1);
        for (let j = 0; j < n + 1; j++) {
            subset[i][j] = false;
        }
    }

    // initialising 1st column to true
    for (let i = 0; i <= r; i++)
        subset[i][0] = true;

    // initializing 1st row except
    // zero position to 0
    for (let i = 1; i <= n; i++)
        subset[0][i] = false;

    // loop to find whether the
    // number is semiperfect
    for (let i = 1; i <= r; i++) {
        for (let j = 1; j <= n; j++) {
            // calculation to check if the
            // number can be made by
            // summation of divisors
            if (j < v[i - 1])
                subset[i][j] = subset[i - 1][j];
            else {
                subset[i][j] = subset[i - 1][j] ||
                    subset[i - 1][j - v[i - 1]];
            }
        }
    }

    // If not possible to make the
    // number by any combination of divisors
    if ((subset[r][n]) == false)
        return false;

    else
        return true;
}

module.exports = SemiperfectTest;
