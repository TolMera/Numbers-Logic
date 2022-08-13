import {EnhancedNumber} from '../classes/enhancedNumber';
import {isOdd} from './isOdd';

export function isPronic(inputN: number | EnhancedNumber): boolean {
    const n = new EnhancedNumber(inputN);
    if (n._isPronic !== undefined) {
        return n.isPronic as boolean;
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
