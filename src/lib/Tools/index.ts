/**
 * 指定された時間関数の実行を待機する
 */
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
 * メソッド名の一覧を取得する
 */
export const nameof = <T>(name: keyof T) => name;

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
