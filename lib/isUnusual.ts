import {EnhancedNumber} from "../classes/enhancedNumber";
import {factorsOf} from './factorsOf';

export function isUnusual(n) {
    n = new EnhancedNumber(n);
    if (n._isUnusual) {
        return n.isUnusual;
    }

    if (factorsOf(n).pop().prime > Math.sqrt(n.number)) {
        n.isUnusual = true;
        return n.isUnusual;
    }
    n.isUnusual = false;
    return n.isUnusual;
};
