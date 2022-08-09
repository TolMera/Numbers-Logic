import type {EnhancedNumberType} from '../classes/enhancedNumber'
import {EnhancedNumber} from '../classes/enhancedNumber';

function getCenteredHexagonal(n: number | EnhancedNumberType): number {
    n = EnhancedNumber(n);
    
    if (n.getCenteredHexagonal) {
        return n.getCenteredHexagonal;
    }

    n.getCenteredHexagonal = 3 * n.number * (n.number - 1) + 1;
    return n.getCenteredHexagonal;
};

module.exports = {getCenteredHexagonal};
