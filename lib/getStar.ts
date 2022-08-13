import type {EnhancedNumberType} from '../classes/enhancedNumber';
import { EnhancedNumber } from "../classes/enhancedNumber";

export function getStar(n: number | EnhancedNumber): number {
    n = new EnhancedNumber(n);
    if (n._getStar !== undefined) {
        return n.getStar;
    }

    n.getStar = 6 * n.number * (n.number - 1) + 1;
    return n.getStar;
}
