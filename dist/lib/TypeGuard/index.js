"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotUndefinedAndNull = exports.isNotNull = exports.isNotUndefined = void 0;
var isNotUndefined = function (v) {
    return v !== undefined;
};
exports.isNotUndefined = isNotUndefined;
var isNotNull = function (v) {
    return v !== null;
};
exports.isNotNull = isNotNull;
var isNotUndefinedAndNull = function (v) {
    return v !== undefined && v !== null;
};
exports.isNotUndefinedAndNull = isNotUndefinedAndNull;
