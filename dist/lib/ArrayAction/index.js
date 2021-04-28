"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatTwoDimensionalArray = exports.swapDown = exports.swapUp = void 0;
/**
 * 指定されたIndexを１つ上に移動する
 */
function swapUp(array, index) {
    var _ = __spreadArray([], array);
    if (index <= 0) {
        return _;
    }
    else {
        _.splice(index - 1, 2, _[index], _[index - 1]);
        return _;
    }
}
exports.swapUp = swapUp;
/**
 * 指定されたIndexを１つ下に移動する
 */
function swapDown(array, index) {
    var _ = __spreadArray([], array);
    if (index < 0) {
        return _;
    }
    else if (_.length - 1 <= index) {
        return _;
    }
    else {
        _.splice(index, 2, _[index + 1], _[index]);
        return _;
    }
}
exports.swapDown = swapDown;
/** 2次元配列を結合する */
function concatTwoDimensionalArray(array1, array2, axis) {
    var A1 = __spreadArray([], array1);
    var A2 = __spreadArray([], array2);
    var A3 = [];
    if (axis === 'x') {
        var height = A1.length > A2.length ? A1.length : A2.length;
        if (A1.length > A2.length) {
            var row_1 = new Array(A2[0].length).fill('');
            var diff = new Array(height - A2.length).fill('');
            diff.forEach(function (_) { return A2.push(row_1); });
        }
        else if (A1.length === A2.length) {
            // pass
        }
        else {
            var row_2 = new Array(A1[0].length).fill('');
            var diff = new Array(height - A1.length).fill('');
            diff.forEach(function (_) { return A1.push(row_2); });
        }
        A1.forEach(function (_, i) {
            A3.push(__spreadArray(__spreadArray([], A1[i]), A2[i]));
        });
    }
    else {
        var length_1 = A1[0].length > A2[0].length ? A1[0].length : A2[0].length;
        if (A1[0].length > A2[0].length) {
            var diff_1 = new Array(length_1 - A2.length).fill('');
            A2.forEach(function (_, i) {
                A2[i] = __spreadArray(__spreadArray([], A2[i]), diff_1);
            });
        }
        else if (A1[0].length === A2[0].length) {
            // pass
        }
        else {
            var diff_2 = new Array(length_1 - A1.length).fill('');
            A1.forEach(function (_, i) {
                A1[i] = __spreadArray(__spreadArray([], A1[i]), diff_2);
            });
        }
        A1.forEach(function (row) { return A3.push(row); });
        A2.forEach(function (row) { return A3.push(row); });
    }
    return A3;
}
exports.concatTwoDimensionalArray = concatTwoDimensionalArray;
