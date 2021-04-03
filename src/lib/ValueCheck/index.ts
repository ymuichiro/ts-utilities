export const undefinedToBlank = (v: string | undefined): string => {
  return v === undefined ? '' : v;
};

export const nullToBlank = (v: string | null): string => {
  return v === null ? '' : v;
};

export const undefinedAndNullToBlank = (v: string | undefined | null): string => {
  return v !== undefined && v !== null ? v : '';
};

export const nanToZero = (v: number): number => {
  return v.toString() === 'NaN' ? 0 : v;
};

export const invalidDataToToday = (v: Date): Date => {
  return v.toString() === 'Invalid Date' ? new Date() : new Date(v.getTime());
};

export const isZeroLength = <T>(v: T[]): boolean => {
  return v.length === 0;
};
