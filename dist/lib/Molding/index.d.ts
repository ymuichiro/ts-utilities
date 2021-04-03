/** 数値を3桁区切りの文字列に変換する */
export declare const to3DigitNum: (num: number) => string;
/** 指定された桁数でゼロパディングする */
export declare const toZeroPadding: (v: string | number, digit: number) => string;
/** 指定された文字列でパディングする */
export declare const toWordPadding: (v: string | number, digit: number, word: string) => string;
