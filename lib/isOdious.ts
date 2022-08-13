import { EnhancedNumber } from "../classes/enhancedNumber";
import {isEvil} from "./isEvil";

export function isOdious (n: number | EnhancedNumber): boolean {
    return !isEvil(n);
};
