import { sum } from './sum';
import { factorsOf } from './factorsOf';

import {
    EnhancedNumber,
    unknownIsEnhancedNumber,
} from "../classes/enhancedNumber";

export function sumOfFactors(n: number | EnhancedNumber): number {
    if (unknownIsEnhancedNumber(n)) {
        return sum(factorsOf(n.number).map((item: { prime: number, power: number }) => {
            return item.prime;
        }));
    }
    return sum(factorsOf(n).map((item: { prime: number, power: number }) => {
        return item.prime;
    }));
}
