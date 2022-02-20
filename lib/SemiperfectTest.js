const divisors = require('./divisors');
const getAliquotSum = require('./getAliquotSum');
const sum = require('./sum');


function SemiperfectTest(n) {
    let divs = divisors(n);
    // Remove the number itself
    divs.pop();
    divs.reverse();

    let aliquotSum = getAliquotSum(n);
    let difference = aliquotSum - n;
    const diffDivs = divs.filter(v => v <= difference)

    if (
        (pattern1(difference, diffDivs))
        || (jumpFromWrongDiv_1stJump(difference, diffDivs))
        || (jumpToWrongDiv_1stJump(difference, diffDivs))

        || (pattern1(n, divs))
        || (jumpFromWrongDiv_1stJump(n, divs))
        || (jumpToWrongDiv_1stJump(n, divs))
    ) {
        return true;
    }

    return false;
}

function pattern1(n, divs) {
    let num = 0;
    for (const div of divs) {
        if (num + div < n) {
            num += div;
        }
        else if (num + div === n) {
            return true;
        }
    }

    return false;
}

function jumpFromWrongDiv_1stJump(n, divs) {
    while (sum(divs) >= n) {
        let num = 0;
        let jump = false;
        for (const div of divs) {
            if (num + div < n) {
                num += div;
            }
            else if (num + div === n) {
                return true;
            } else if (!jump) {
                // JFW1 - Jump From Wrong (1st Jump)
                jump = divs[divs.indexOf(div) - 1];
            }
        }

        divs = divs.filter((v) => v !== jump);
    }

    return false;
}

function jumpToWrongDiv_1stJump(n, divs) {
    while (sum(divs) >= n) {
        let num = 0;
        let jump = false;
        for (const div of divs) {
            if (num + div < n) {
                num += div;
                if (jump === true) {
                    jump = div;
                }
            }
            else if (num + div === n) {
                return true;
            } else if (jump === false) {
                // JFW1 - Jump From Wrong (1st Jump)
                jump = true;
            }
        }

        divs = divs.filter((v) => v !== jump);
        if (jump === true) {
            break;
        }
    }

    return false;
}

module.exports = SemiperfectTest;
