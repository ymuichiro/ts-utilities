/** 数値を3桁区切りの文字列に変換する */
export const to3DigitNum = (num: number): string => {
  if (num.toString() === 'NaN') return '0';
  return Number(num).toLocaleString();
};

/** 指定された桁数でゼロパディングする */
export const toZeroPadding = (v: string | number, digit: number): string => {
  const _ = digit < 0 ? -digit : digit; // 絶対値
  if (typeof v === 'number') {
    return `${'0'.repeat(_)}${v.toString()}`.slice(-_);
  } else {
    return `${'0'.repeat(_)}${v}`.slice(-_);
  }
};

/** 指定された文字列でパディングする */
export const toWordPadding = (v: string | number, digit: number, word: string): string => {
  const _ = digit < 0 ? -digit : digit; // 絶対値
  if (typeof v === 'number') {
    return `${word.repeat(_)}${v.toString()}`.slice(-_);
  } else {
    return `${word.repeat(_)}${v}`.slice(-_);
  }
};
