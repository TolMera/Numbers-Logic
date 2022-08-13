import {EnhancedNumber} from "../classes/enhancedNumber";
// Has an integer as a root power, 9 should have 3^3

export function hasIntRoot(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._hasIntRoot) {
        return n.hasIntRoot as boolean;
    }

    for (let c = 2; c <= Math.sqrt(n.number); c++) {
        if (Number.isInteger(Math.pow(n.number, 1 / c))) {
            n.hasIntRoot = true;
            return n.hasIntRoot;
        }
    }
    n.hasIntRoot = false;
    return n.hasIntRoot;
};
