import isHappy from "./isHappy";

export function isSad(n: number, base: number = 10) {
    return !isHappy(n, base);
}
