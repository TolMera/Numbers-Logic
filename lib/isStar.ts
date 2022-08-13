import {EnhancedNumber} from "../classes/enhancedNumber";
import {getStar} from "./getStar";
import {positiveOrNegativeSequence} from "./positiveOrNegativeSequence";


export function isStar(n: number | EnhancedNumber): boolean {
    n = new EnhancedNumber(n);
    if (n._isStar) {
        return n.isStar as boolean;
    }

    let c: number | boolean = 1;
    while (true) {
        let nth = getStar(c as number);
        c = positiveOrNegativeSequence(n.number, nth, c as number);
        if ((c as any) instanceof Boolean) {
            n.isStar = c as boolean;
            return n.isStar;
        }
    }
}
