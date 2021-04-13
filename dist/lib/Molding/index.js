"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toWordPadding = exports.toZeroPadding = exports.to3DigitNum = void 0;
/** 数値を3桁区切りの文字列に変換する */
var to3DigitNum = function (num) {
    if (num.toString() === 'NaN')
        return '0';
    return Number(num).toLocaleString();
};
exports.to3DigitNum = to3DigitNum;
/** 指定された桁数でゼロパディングする */
var toZeroPadding = function (v, digit) {
    var _ = digit < 0 ? -digit : digit; // 絶対値
    if (typeof v === 'number') {
        return ("" + '0'.repeat(_) + v.toString()).slice(-_);
    }
    else {
        return ("" + '0'.repeat(_) + v).slice(-_);
    }
};
exports.toZeroPadding = toZeroPadding;
/** 指定された文字列でパディングする */
var toWordPadding = function (v, digit, word) {
    var _ = digit < 0 ? -digit : digit; // 絶対値
    if (typeof v === 'number') {
        return ("" + word.repeat(_) + v.toString()).slice(-_);
    }
    else {
        return ("" + word.repeat(_) + v).slice(-_);
    }
};
exports.toWordPadding = toWordPadding;
