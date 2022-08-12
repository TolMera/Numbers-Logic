import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';
import {isOdd} from './isOdd';

export function isPronic(n: number | EnhancedNumberType): boolean {
    n = new EnhancedNumber(n);
    if (n._isPronic !== undefined) {
        return n.isPronic;
    }

    if (isOdd(n.number)) {
        n.isPronic = false;
        return n.isPronic;
    }

    const sqrt = Math.sqrt(n.number);
    if (Math.pow(sqrt, 2) === n.number) {
        // Pronic numbers will pass the above test.
        let x = 1;
        while (x <= sqrt) {
            let nx = n.number / x;
            if (
                (nx === x + 1)
                && (nx % 1 === 0)
            ) {
                n.isPronic = true;
                return n.isPronic;
            }
            x++;
        }
    }
    n.isPronic = false;
    return n.isPronic;
};
