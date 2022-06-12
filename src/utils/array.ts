export const arrayFromNumber = (size: number): unknown[] => Array.from(new Array(size))

export const isEmptyArray = (arr: unknown): boolean => Array.isArray(arr) && arr.length === 0
