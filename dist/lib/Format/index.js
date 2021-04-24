"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemError = void 0;
var SystemError = /** @class */ (function (_super) {
    __extends(SystemError, _super);
    function SystemError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'SystemError';
        return _this;
    }
    return SystemError;
}(Error));
/** format system error */
var systemError = function (message) {
    var method = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        method[_i - 1] = arguments[_i];
    }
    return new SystemError(message + " (" + method.join('.') + ")");
};
exports.systemError = systemError;
