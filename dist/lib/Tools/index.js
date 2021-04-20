"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMethod = exports.nameof = exports.createHashKey = exports.throttle = void 0;
/**
 * 指定された時間関数の実行を待機する
 */
var throttle = function (fn, interval) {
    var lastTime = Date.now() - interval;
    return function () {
        if (lastTime + interval < Date.now()) {
            lastTime = Date.now();
            fn();
        }
    };
};
exports.throttle = throttle;
/**
 * ランダムなHash値を取得する
 */
function createHashKey() {
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
exports.createHashKey = createHashKey;
/**
 * メソッド名一覧を取得する
 */
var nameof = function (name) { return name; };
exports.nameof = nameof;
/**
 * クラスのメソッド一覧を返す
 */
var getMethod = function (obj, key) { return key; };
exports.getMethod = getMethod;
