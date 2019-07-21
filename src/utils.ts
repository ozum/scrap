import isEqual from "lodash.isequal";
import uniqWith from "lodash.uniqwith";

export const BIN = "scrap";

/**
 * Merges given array and eliminates duplicate values.
 *
 * @param arrays is list of arrays to be merged.
 * @returns merged arrays without any duplicate value.
 */
export function mergeArrayUnique<T>(...arrays: T[][]): T[] {
  const result = arrays.filter(Boolean).reduce((merged: T[], current: T[]) => merged.concat(current), []);
  return uniqWith(result, isEqual);
}
