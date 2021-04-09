/** 型を保持したまま、処理を行うパイプ処理を提供する */
export declare class Pipe<T> {
    private v;
    constructor(v: T);
    /** 途中経過をログ出力する */
    log(text?: string): this;
    /** Pipe処理を継続する */
    to(fc: (v: T) => T): this;
    /** Pipe処理を完了する */
    exit(): T;
}
/**
 * 処理途中で型の変更が可能なパイプ処理を提供する
 * (関数合成はFunctionChainを通常の関数でラップする)
 */
export declare class FunctionChain<I> {
    private data;
    constructor(v: I);
    to<O>(fc: (e: I) => O): FunctionChain<O>;
    log(text?: string): this;
    exit(): I;
}
