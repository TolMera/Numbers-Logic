import type {EnhancedNumberType} from '../classes/enhancedNumber';
import { EnhancedNumber } from "../classes/enhancedNumber";

export function getTetrahedral(n: number | EnhancedNumberType): number {
    n = new EnhancedNumber(n);
    if (n._getTetrahedral !== undefined) {
        return n.getTetrahedral;
    }

    n.getTetrahedral = (n * (n + 1) * (n + 2)) / 6;
    return n.getTetrahedral;
}
