export declare const isUndefined: <T>(v: T | undefined) => v is undefined;
export declare const isNull: <T>(v: T | null) => v is null;
export declare const isNotUndefinedAndNull: <T>(v: T | null | undefined) => v is T;
export declare const switchUndefined: <T, U>(v: T | undefined, isValue: U, isNotValue: U) => U;
export declare const switchNull: <T, U>(v: T | null, isValue: U, isNotValue: U) => U;
export declare const isUndefinedOrNullError: <T>(v: T | null | undefined, error: Error) => T;
