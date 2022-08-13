import { EnhancedNumber } from "../classes/enhancedNumber";
import { getTetrahedral } from "./getTetrahedral";
import { positiveOrNegativeSequence } from "./positiveOrNegativeSequence";

export function isTetrahedral(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._isTetrahedral) {
        return n.isTetrahedral as boolean;
    }

    let c: number | boolean = 0;
    while (true) {
        let nth = getTetrahedral(c);
        c = positiveOrNegativeSequence(n.number, nth, c);
        if (c === true || c === false) {
            n.isTetrahedral = c;
            return n.isTetrahedral;
        }
    }
}
