"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isZeroLength = exports.invalidDataToToday = exports.nanToZero = exports.undefinedAndNullToBlank = exports.nullToBlank = exports.undefinedToBlank = void 0;
var undefinedToBlank = function (v) {
    return v === undefined ? '' : v;
};
exports.undefinedToBlank = undefinedToBlank;
var nullToBlank = function (v) {
    return v === null ? '' : v;
};
exports.nullToBlank = nullToBlank;
var undefinedAndNullToBlank = function (v) {
    return v !== undefined && v !== null ? v : '';
};
exports.undefinedAndNullToBlank = undefinedAndNullToBlank;
var nanToZero = function (v) {
    return v.toString() === 'NaN' ? 0 : v;
};
exports.nanToZero = nanToZero;
var invalidDataToToday = function (v) {
    return v.toString() === 'Invalid Date' ? new Date() : new Date(v.getTime());
};
exports.invalidDataToToday = invalidDataToToday;
var isZeroLength = function (v) {
    return v.length === 0;
};
exports.isZeroLength = isZeroLength;
