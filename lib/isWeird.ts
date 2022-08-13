import {EnhancedNumber, EnhancedNumberType} from "../classes/enhancedNumber";
import {P_number_theory} from 'number-theory';
/* Anything containing isSemiperfect has an extreme computation time */
import {isSemiperfect} from "./isSemiperfect";

export function isWeird(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._isWeird) {
        return n.isWeird;
    }

    if (n.number <= 0) {
        n.isWeird = false;
        return n.isWeird;
    }
    if (P_number_theory.isAbundant(n)) {
        if (!isSemiperfect(n)) {
            n.isWeird = true;
            return n.isWeird;
        }
    }
    n.isWeird = false;
    return n.isWeird;
};
