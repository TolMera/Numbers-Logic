import type {EnhancedNumberType} from '../classes/enhancedNumber'
import {EnhancedNumber} from '../classes/enhancedNumber';

export function getCenteredHexagonal(n: number | EnhancedNumberType): number {
    n = new EnhancedNumber(n);
    
    if (n._getCenteredHexagonal !== undefined) {
        return n.getCenteredHexagonal;
    }

    n.getCenteredHexagonal = 3 * n * (n - 1) + 1;
    return n.getCenteredHexagonal;
};
