/**
 * 指定された時間関数の実行を待機する
 */
export declare const throttle: (fn: any, interval: number) => () => void;
/**
 * ランダムなHash値を取得する
 */
export declare function createHashKey(): string;
/**
 * メソッド名一覧を取得する
 */
export declare const nameof: <T>(name: keyof T) => keyof T;
/**
 * クラスのメソッド一覧を返す
 */
export declare const getMethod: <T, U extends keyof T>(obj: T, key: U) => U;
