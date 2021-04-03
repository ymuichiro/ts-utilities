/** 与えられた値に対して連続的に処理を行う */
export declare class Pipe<T> {
    private v;
    constructor(v: T);
    /** 途中経過をログ出力する */
    log(): this;
    /** Pipe処理を継続する */
    to(fc: (v: T) => T): this;
    /** Pipe処理を完了する */
    exit(): T;
}
