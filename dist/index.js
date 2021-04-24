"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Format = exports.Array = exports.Tools = exports.Molding = exports.Functional = exports.ValueCheck = exports.TypeGuard = void 0;
/**
 * 型をダウンキャストする
 */
exports.TypeGuard = __importStar(require("./lib/TypeGuard/index"));
/**
 * 型をチェックする
 */
exports.ValueCheck = __importStar(require("./lib/ValueCheck/index"));
/**
 * 関数型プログラミング
 */
exports.Functional = __importStar(require("./lib/Functional/index"));
/**
 * 値を成型する
 */
exports.Molding = __importStar(require("./lib/Molding/index"));
/**
 * Utility
 */
exports.Tools = __importStar(require("./lib/Tools/index"));
/**
 * 配列を操作する
 */
exports.Array = __importStar(require("./lib/Array/index"));
/**
 * ログ向けフォーマッタ
 */
exports.Format = __importStar(require("./lib/Format/index"));
