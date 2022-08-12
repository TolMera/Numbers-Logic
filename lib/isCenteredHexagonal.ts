import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from "../classes/enhancedNumber";
import {getCenteredHexagonal} from "./getCenteredHexagonal";
import {positiveOrNegativeSequence} from "./positiveOrNegativeSequence";

export function isCenteredHexagonal(n) {
    n = new EnhancedNumber(n);
    if (n._isCenteredHexagonal !== undefined) {
        return n.isCenteredHexagonal;
    }

    let c = 1;
    while (true) {
        let nth = getCenteredHexagonal(c);
        c = positiveOrNegativeSequence(n.number, nth, c);
        if (c === true || c === false) {
            n.isCenteredHexagonal = c;
            return n.isCenteredHexagonal;
        }
    }
}

module.exports = isCenteredHexagonal;
