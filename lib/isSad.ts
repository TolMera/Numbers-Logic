import { EnhancedNumber } from "../classes/enhancedNumber";
import { isHappy } from "./isHappy";

export function isSad(n: number | EnhancedNumber, base: number = 10) {
    return !isHappy(n, base);
}
