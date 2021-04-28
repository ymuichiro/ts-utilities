/**
 * 指定されたIndexを１つ上に移動する
 */
export declare function swapUp<T>(array: T[], index: number): T[];
/**
 * 指定されたIndexを１つ下に移動する
 */
export declare function swapDown<T>(array: T[], index: number): T[];
/** 2次元配列を結合する */
export declare function concatTwoDimensionalArray<T>(array1: T[][], array2: T[][], axis: 'x' | 'y'): T[][];
