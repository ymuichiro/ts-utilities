/** 指定された時間関数の実行を待機する */
export declare const throttle: (fn: any, interval: number) => () => void;
/**
 * ランダムなHash値を取得する
 */
export declare function createHashKey(): string;
/**
 * 指定されたIndexを１つ上に移動する
 */
export declare function swapUp<T>(array: T[], index: number): T[];
/**
 * 指定されたIndexを１つ下に移動する
 */
export declare function swapDown<T>(array: T[], index: number): T[];
