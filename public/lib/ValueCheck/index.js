export var undefinedToBlank = function (v) {
    return v === undefined ? '' : v;
};
export var nullToBlank = function (v) {
    return v === null ? '' : v;
};
export var undefinedAndNullToBlank = function (v) {
    return v !== undefined && v !== null ? v : '';
};
export var nanToZero = function (v) {
    return v.toString() === 'NaN' ? 0 : v;
};
export var invalidDataToToday = function (v) {
    return v.toString() === 'Invalid Date' ? new Date() : new Date(v.getTime());
};
export var isZeroLength = function (v) {
    return v.length === 0;
};
