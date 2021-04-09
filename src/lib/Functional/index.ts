/** 型を保持したまま、処理を行うパイプ処理を提供する */
export class Pipe<T> {
  private v: T;

  constructor(v: T) {
    this.v = v;
  }

  /** 途中経過をログ出力する */
  public log(text?: string): this {
    if (text !== undefined) {
      console.log(text);
    }
    console.log(this.v);
    return this;
  }

  /** Pipe処理を継続する */
  public to(fc: (v: T) => T): this {
    this.v = fc(this.v);
    return this;
  }

  /** Pipe処理を完了する */
  public exit(): T {
    return this.v;
  }
}

/**
 * 処理途中で型の変更が可能なパイプ処理を提供する
 * (関数合成はFunctionChainを通常の関数でラップする)
 */
export class FunctionChain<I> {
  private data: I;
  constructor(v: I) {
    this.data = v;
  }

  public to<O>(fc: (e: I) => O): FunctionChain<O> {
    const current = fc(this.data);
    return new FunctionChain(current);
  }

  public log(text?: string): this {
    if (text !== undefined) {
      console.log(text);
    }
    console.log(this.data);
    return this;
  }

  public exit(): I {
    return this.data;
  }
}
