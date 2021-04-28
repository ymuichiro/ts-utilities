"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefinedOrNullError = exports.switchNull = exports.switchUndefined = exports.isNotUndefinedAndNull = exports.isNull = exports.isUndefined = void 0;
var isUndefined = function (v) {
    return v === undefined;
};
exports.isUndefined = isUndefined;
var isNull = function (v) {
    return v === null;
};
exports.isNull = isNull;
var isNotUndefinedAndNull = function (v) {
    return v !== undefined && v !== null;
};
exports.isNotUndefinedAndNull = isNotUndefinedAndNull;
var switchUndefined = function (v, isValue, isNotValue) {
    if (exports.isUndefined(v)) {
        return isValue;
    }
    else {
        return isNotValue;
    }
};
exports.switchUndefined = switchUndefined;
var switchNull = function (v, isValue, isNotValue) {
    if (exports.isNull(v)) {
        return isValue;
    }
    else {
        return isNotValue;
    }
};
exports.switchNull = switchNull;
var isUndefinedOrNullError = function (v, error) {
    if (exports.isNotUndefinedAndNull(v)) {
        return v;
    }
    else {
        throw error;
    }
};
exports.isUndefinedOrNullError = isUndefinedOrNullError;
