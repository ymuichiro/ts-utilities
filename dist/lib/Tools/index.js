/** 指定された時間関数の実行を待機する */
export var throttle = function (fn, interval) {
    var lastTime = Date.now() - interval;
    return function () {
        if (lastTime + interval < Date.now()) {
            lastTime = Date.now();
            fn();
        }
    };
};
/** メソッド名の一覧を取得する */
export var nameof = function (name) { return name; };
/**
 * ランダムなHash値を取得する
 */
export function createHashKey() {
    var digit = 100000000000;
    var randNums = [
        new Date().getTime(),
        Math.round(Math.random() * digit) + digit,
        Math.round(Math.random() * digit) + digit,
    ];
    var hash_key = '';
    randNums.forEach(function (byte) { return (hash_key += byte < 0 ? (byte += 256).toString(16) : byte.toString(16)); });
    return hash_key;
}
