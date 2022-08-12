import type {EnhancedNumberType} from '../classes/enhancedNumber';
import { EnhancedNumber } from "../classes/enhancedNumber";

export function getStar(n: number | EnhancedNumberType): number {
    n = new EnhancedNumber(n);
    if (n._getStar !== undefined) {
        return n.getStar;
    }

    n.getStar = 6 * n * (n - 1) + 1;
    return n.getStar;
}
