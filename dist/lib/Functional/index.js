"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionChain = exports.Pipe = void 0;
/** 型を保持したまま、処理を行うパイプ処理を提供する */
var Pipe = /** @class */ (function () {
    function Pipe(v) {
        this.v = v;
    }
    /** 途中経過をログ出力する */
    Pipe.prototype.log = function (text) {
        if (text !== undefined) {
            console.log(text);
        }
        console.log(this.v);
        return this;
    };
    /** Pipe処理を継続する */
    Pipe.prototype.to = function (fc) {
        this.v = fc(this.v);
        return this;
    };
    /** Pipe処理を完了する */
    Pipe.prototype.exit = function () {
        return this.v;
    };
    return Pipe;
}());
exports.Pipe = Pipe;
/**
 * 処理途中で型の変更が可能なパイプ処理を提供する
 * (関数合成はFunctionChainを通常の関数でラップする)
 */
var FunctionChain = /** @class */ (function () {
    function FunctionChain(v) {
        this.data = v;
    }
    FunctionChain.prototype.to = function (fc) {
        var current = fc(this.data);
        return new FunctionChain(current);
    };
    FunctionChain.prototype.log = function (text) {
        if (text !== undefined) {
            console.log(text);
        }
        console.log(this.data);
        return this;
    };
    FunctionChain.prototype.exit = function () {
        return this.data;
    };
    return FunctionChain;
}());
exports.FunctionChain = FunctionChain;
