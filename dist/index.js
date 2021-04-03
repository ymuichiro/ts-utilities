var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// src/index.ts
__markAsModule(exports);
__export(exports, {
  Functional: () => Functional_exports,
  Molding: () => Molding_exports,
  Tools: () => Tools_exports,
  TypeGuard: () => TypeGuard_exports,
  ValueCheck: () => ValueCheck_exports
});

// src/lib/TypeGuard/index.ts
var TypeGuard_exports = {};
__export(TypeGuard_exports, {
  isNotNull: () => isNotNull,
  isNotUndefined: () => isNotUndefined,
  isNotUndefinedAndNull: () => isNotUndefinedAndNull
});
var isNotUndefined = (v) => {
  return v !== void 0;
};
var isNotNull = (v) => {
  return v !== null;
};
var isNotUndefinedAndNull = (v) => {
  return v !== void 0 && v !== null;
};

// src/lib/ValueCheck/index.ts
var ValueCheck_exports = {};
__export(ValueCheck_exports, {
  invalidDataToToday: () => invalidDataToToday,
  isZeroLength: () => isZeroLength,
  nanToZero: () => nanToZero,
  nullToBlank: () => nullToBlank,
  undefinedAndNullToBlank: () => undefinedAndNullToBlank,
  undefinedToBlank: () => undefinedToBlank
});
var undefinedToBlank = (v) => {
  return v === void 0 ? "" : v;
};
var nullToBlank = (v) => {
  return v === null ? "" : v;
};
var undefinedAndNullToBlank = (v) => {
  return v !== void 0 && v !== null ? v : "";
};
var nanToZero = (v) => {
  return v.toString() === "NaN" ? 0 : v;
};
var invalidDataToToday = (v) => {
  return v.toString() === "Invalid Date" ? new Date() : new Date(v.getTime());
};
var isZeroLength = (v) => {
  return v.length === 0;
};

// src/lib/Functional/index.ts
var Functional_exports = {};
__export(Functional_exports, {
  Pipe: () => Pipe
});
var Pipe = class {
  constructor(v) {
    this.v = v;
  }
  log() {
    console.log(this.v);
    return this;
  }
  to(fc) {
    this.v = fc(this.v);
    return this;
  }
  exit() {
    return this.v;
  }
};

// src/lib/Molding/index.ts
var Molding_exports = {};
__export(Molding_exports, {
  to3DigitNum: () => to3DigitNum,
  toWordPadding: () => toWordPadding,
  toZeroPadding: () => toZeroPadding
});
var to3DigitNum = (num) => {
  if (num.toString() === "NaN")
    return "0";
  return Number(num).toLocaleString();
};
var toZeroPadding = (v, digit) => {
  const _ = digit < 0 ? -digit : digit;
  if (typeof v === "number") {
    return `${"0".repeat(_)}${v.toString()}`.slice(-_);
  } else {
    return `${"0".repeat(_)}${v}`.slice(-_);
  }
};
var toWordPadding = (v, digit, word) => {
  const _ = digit < 0 ? -digit : digit;
  if (typeof v === "number") {
    return `${word.repeat(_)}${v.toString()}`.slice(-_);
  } else {
    return `${word.repeat(_)}${v}`.slice(-_);
  }
};

// src/lib/Tools/index.ts
var Tools_exports = {};
__export(Tools_exports, {
  createHashKey: () => createHashKey,
  swapDown: () => swapDown,
  swapUp: () => swapUp,
  throttle: () => throttle
});
var throttle = (fn, interval) => {
  let lastTime = Date.now() - interval;
  return function() {
    if (lastTime + interval < Date.now()) {
      lastTime = Date.now();
      fn();
    }
  };
};
function createHashKey() {
  const digit = 1e11;
  const randNums = [
    new Date().getTime(),
    Math.round(Math.random() * digit) + digit,
    Math.round(Math.random() * digit) + digit
  ];
  let hash_key = "";
  randNums.forEach((byte) => hash_key += byte < 0 ? (byte += 256).toString(16) : byte.toString(16));
  return hash_key;
}
function swapUp(array, index) {
  if (index <= 0) {
    return array;
  } else {
    array.splice(index - 1, 2, array[index], array[index - 1]);
    return array;
  }
}
function swapDown(array, index) {
  if (index < 0) {
    return array;
  } else if (array.length - 1 <= index) {
    return array;
  } else {
    console.log(array.length);
    array.splice(index, 2, array[index + 1], array[index]);
    return array;
  }
}
