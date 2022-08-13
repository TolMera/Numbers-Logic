import { EnhancedNumberType } from '../classes/EnhancedNumberType';
import { EnhancedNumber } from "../classes/enhancedNumber";
import { isAbundant } from './isAbundant';
import { isPerfect } from './isPerfect';
import { isPowerOf2 } from './isPowerOf2';
import { isPractical } from "./isPractical";
import { semiperfectTest } from './semiperfectTest';
import { getAliquotSum } from './getAliquotSum';

/* Anything containing isSemiperfect has an extreme computation time */
export function isSemiperfect(n: number | EnhancedNumber) {
    console.warn("Any function using isSemiperfect is likely to lag significantly");

    n = new EnhancedNumber(n);
    if (n._isSemiperfect) {
        return n.isSemiperfect;
    }

    if (n.number <= 1) {
        n.isSemiperfect = false;
        return n.isSemiperfect;
    }

    if (getAliquotSum(n) === n.number) {
        // This is a PERFECT number - that also makes it semi-perfect?
        n.isSemiperfect = true;
        return n.isSemiperfect;
    }

    if (isPractical(n) && !isPowerOf2(n)) {
        n.isSemiperfect = true;
        return n.isSemiperfect;
    }

    if (isPerfect(n) || isAbundant(n)) {
        n.isSemiperfect = semiperfectTest(n);
        return n.isSemiperfect;
    }
    n.isSemiperfect = false;
    return n.isSemiperfect;
};
