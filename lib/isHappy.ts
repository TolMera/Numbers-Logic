import type {EnhancedNumberType} from '../classes/enhancedNumber';
import {EnhancedNumber} from '../classes/enhancedNumber';
import {sum} from './sum';

export function isHappy(n, base = 10) {
    n = new EnhancedNumber(n);
    if (n._isHappy !== undefined) {
        return n.isHappy;
    }

    number = Math.abs(n.number);

    const theList = [];
    while (true) {
        number = sum(
            Array.from(number.toString(base))
                .map(number => Math.pow(parseInt(number, base), 2))
        );
        if (theList.includes(number)) {
            n.isHappy = false;
            return n.isHappy;
        }
        theList.push(number);

        if (number === 1) {
            n.isHappy = true;
            return n.isHappy;
        }
    }
}
