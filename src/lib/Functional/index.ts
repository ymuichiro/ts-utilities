/** 与えられた値に対して連続的に処理を行う */
export class Pipe<T> {
  private v: T;

  constructor(v: T) {
    this.v = v;
  }

  /** 途中経過をログ出力する */
  public log(): this {
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
