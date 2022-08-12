import type {EnhancedNumberType} from '../classes/enhancedNumber';
import { EnhancedNumber } from "../classes/enhancedNumber";

export function getTetrahedral(n: number | EnhancedNumberType): number {
    n = new EnhancedNumber(n);
    if (n._getTetrahedral !== undefined) {
        return n.getTetrahedral;
    }

    n.getTetrahedral = (n.number * (n.number + 1) * (n.number + 2)) / 6;
    return n.getTetrahedral;
}
