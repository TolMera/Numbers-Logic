import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';
import {isPolite} from './isPolite';

export function isImpolite(n) {
    n = new EnhancedNumber(n);
    if (n._isImpolite !== undefined) {
        return n.isImpolite;
    }
    
    n.isImpolite = !isPolite(n);
    return n.isImpolite;
};
