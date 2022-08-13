import {isRough} from "./isRough";

export function isSmooth(n: number, k: number): boolean {
    return !isRough(n, k);
};
