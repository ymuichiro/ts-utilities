export declare const undefinedToBlank: (v: string | undefined) => string;
export declare const nullToBlank: (v: string | null) => string;
export declare const undefinedAndNullToBlank: (v: string | undefined | null) => string;
export declare const nanToZero: (v: number) => number;
export declare const invalidDataToToday: (v: Date) => Date;
export declare const isZeroLength: <T>(v: T[]) => boolean;
