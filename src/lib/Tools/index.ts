/** 指定された時間関数の実行を待機する */
export const throttle = (fn: any, interval: number) => {
  let lastTime = Date.now() - interval;
  return function () {
    if (lastTime + interval < Date.now()) {
      lastTime = Date.now();
      fn();
    }
  };
};

/**
 * ランダムなHash値を取得する
 */
export function createHashKey() {
  const digit = 100000000000;
  const randNums = [
    new Date().getTime(),
    Math.round(Math.random() * digit) + digit,
    Math.round(Math.random() * digit) + digit,
  ];
  let hash_key = '';
  randNums.forEach(byte => (hash_key += byte < 0 ? (byte += 256).toString(16) : byte.toString(16)));
  return hash_key;
}

/**
 * 指定されたIndexを１つ上に移動する
 */
export function swapUp<T>(array: T[], index: number): T[] {
  const _ = [...array];
  if (index <= 0) {
    return _;
  } else {
    _.splice(index - 1, 2, _[index], _[index - 1]);
    return _;
  }
}

/**
 * 指定されたIndexを１つ下に移動する
 */
export function swapDown<T>(array: T[], index: number): T[] {
  const _ = [...array];
  if (index < 0) {
    return _;
  } else if (_.length - 1 <= index) {
    return _;
  } else {
    _.splice(index, 2, _[index + 1], _[index]);
    return _;
  }
}
