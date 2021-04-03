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
  if (index <= 0) {
    return array;
  } else {
    array.splice(index - 1, 2, array[index], array[index - 1]);
    return array;
  }
}

/**
 * 指定されたIndexを１つ下に移動する
 */
export function swapDown<T>(array: T[], index: number): T[] {
  if (index < 0) {
    return array;
  } else if (array.length - 1 <= index) {
    return array;
  } else {
    console.log(array.length);
    array.splice(index, 2, array[index + 1], array[index]);
    return array;
  }
}
