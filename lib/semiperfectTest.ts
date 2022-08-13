import { EnhancedNumber } from "../classes/enhancedNumber";
import { divisors } from './divisors';
import { getAliquotSum } from './getAliquotSum';
import { sum } from './sum';

export function semiperfectTest(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._semiperfectTest) {
        return n.semiperfectTest;
    }

    let { difference, diffDivs, divs } = prepareNumberspace(n);

    if (
        (pattern1(difference, diffDivs))
        || (jumpFromWrongDiv_1stJump(difference, diffDivs))
        || (jumpToWrongDiv_1stJump(difference, diffDivs))

        || (pattern1(n.number, divs))
        || (jumpFromWrongDiv_1stJump(n.number, divs))
        || (jumpToWrongDiv_1stJump(n.number, divs))
    ) {
        return true;
    }

    return false;
}

function prepareNumberspace(n) {
    let difference = getAliquotSum(n) - n.number;

    let divs = divisors(n);
    // Remove the number itself
    divs.pop();
    divs.reverse();
    divs = reduceDivs(divs, difference);
    let diffDivs = Array.from(divs);
    diffDivs.pop();
    return { difference, diffDivs, divs };
}

function reduceDivs(divs, difference) {
    let number = sum(divs.filter(v => (v > difference)));
    divs = divs.filter(v => !(v > difference));
    divs.push(number);
    return divs;
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
