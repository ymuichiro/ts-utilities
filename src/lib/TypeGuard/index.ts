export const isUndefined = <T>(v: T | undefined): v is undefined => {
  return v !== undefined;
};

export const isNull = <T>(v: T | null): v is null => {
  return v !== null;
};

export const isNotUndefinedAndNull = <T>(v: T | undefined | null): v is T => {
  return v !== undefined && v !== null;
};

export const switchUndefined = <T, U>(v: T | undefined, isValue: U, isNotValue: U): U => {
  if (isUndefined(v)) {
    return isValue;
  } else {
    return isNotValue;
  }
};

export const switchNull = <T, U>(v: T | null, isValue: U, isNotValue: U): U => {
  if (isNull(v)) {
    return isValue;
  } else {
    return isNotValue;
  }
};

export const isUndefinedOrNullError = <T>(v: T | undefined | null, error: Error): T => {
  if (isNotUndefinedAndNull(v)) {
    return v;
  } else {
    throw error;
  }
};
