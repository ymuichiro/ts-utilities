/**
 * 指定されたIndexの位置を1つ大きい側に移動する
 */
export declare function swapUp<T>(array: T[], index: number): T[];
/**
 * 指定されたIndexを１つ小さい側に移動する
 */
export declare function swapDown<T>(array: T[], index: number): T[];
/** 2次元配列を結合する */
export declare function concatTwoDimensionalArray<T>(array1: T[][], array2: T[][], axis: 'x' | 'y'): T[][];
/** 配列の途中に値を挿入する */
export declare function insertValueInBetween<T>(arr: T[], position: number, insertValue: T): T[];
