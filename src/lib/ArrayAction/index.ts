/**
 * 指定されたIndexを１つ上に移動する
 */
export function swapUp<T>(array: T[], index: number): T[] {
  const _ = [...array];
  if (index <= 0) {
    return _;
  } else {
    _.splice(index - 1, 2, _[index], _[index - 1]);
    return _;
  }
}

/**
 * 指定されたIndexを１つ下に移動する
 */
export function swapDown<T>(array: T[], index: number): T[] {
  const _ = [...array];
  if (index < 0) {
    return _;
  } else if (_.length - 1 <= index) {
    return _;
  } else {
    _.splice(index, 2, _[index + 1], _[index]);
    return _;
  }
}

/** 2次元配列を結合する */
export function concatTwoDimensionalArray<T>(array1: T[][], array2: T[][], axis: 'x' | 'y') {
  const A1: T[][] = [...array1];
  const A2: T[][] = [...array2];
  const A3: T[][] = [];

  if (axis === 'x') {
    const height = A1.length > A2.length ? A1.length : A2.length;
    if (A1.length > A2.length) {
      const row = new Array(A2[0].length).fill('');
      const diff = new Array(height - A2.length).fill('');
      diff.forEach(_ => A2.push(row));
    } else if (A1.length === A2.length) {
      // pass
    } else {
      const row = new Array(A1[0].length).fill('');
      const diff = new Array(height - A1.length).fill('');
      diff.forEach(_ => A1.push(row));
    }
    A1.forEach((_, i) => {
      A3.push([...A1[i], ...A2[i]]);
    });
  } else {
    const length = A1[0].length > A2[0].length ? A1[0].length : A2[0].length;
    if (A1[0].length > A2[0].length) {
      const diff = new Array(length - A2.length).fill('');
      A2.forEach((_, i) => {
        A2[i] = [...A2[i], ...diff];
      });
    } else if (A1[0].length === A2[0].length) {
      // pass
    } else {
      const diff = new Array(length - A1.length).fill('');
      A1.forEach((_, i) => {
        A1[i] = [...A1[i], ...diff];
      });
    }

    A1.forEach(row => A3.push(row));
    A2.forEach(row => A3.push(row));
  }

  return A3;
}
