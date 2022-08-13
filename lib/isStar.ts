import {EnhancedNumber} from "../classes/enhancedNumber";
import {getStar} from "./getStar";
import {positiveOrNegativeSequence} from "./positiveOrNegativeSequence";


export function isStar(n: number | EnhancedNumber): boolean {
    n = new EnhancedNumber(n);
    if (n._isStar) {
        return n.isStar;
    }

    let c = 1;
    while (true) {
        let nth = getStar(c);
        c = positiveOrNegativeSequence(n.number, nth, c);
        if (c === true || c === false) {
            n.isStar = c;
            return n.isStar;
        }
    }
}
