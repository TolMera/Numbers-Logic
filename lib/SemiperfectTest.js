const divisors = require('./divisors');
const sum = require('./sum');

function SemiperfectTest(n) {
    let divs = divisors(n);
    // console.log(divs);
    // Remove the number itself
    divs.pop();
    divs.reverse();

    // console.log(divs);

    if (jumpFromWrongDiv_1stJump(n, divs)) return true;
    if (jumpToWrongDiv_1stJump(n, divs)) return true;

    return false;
}

function jumpFromWrongDiv_1stJump(n, divs) {
    while (sum(divs) >= n) {
        let num = 0;
        let jump = false;
        for (const div of divs) {
            if (num + div < n) {
                // console.log(num, div);
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
                // console.log(num, div);
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
