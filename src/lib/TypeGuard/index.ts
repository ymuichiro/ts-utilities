export const isNotUndefined = <T>(v: T | undefined): v is T => {
  return v !== undefined;
};

export const isNotNull = <T>(v: T | null): v is T => {
  return v !== null;
};

export const isNotUndefinedAndNull = <T>(v: T | undefined | null): v is T => {
  return v !== undefined && v !== null;
};
