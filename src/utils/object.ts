export const isObject = (obj: unknown): obj is Record<string, unknown> => obj instanceof Object

export const objectHasAllRequiredKeys = (obj: unknown, requiredKeys: string[]) => isObject(obj) && requiredKeys.every(key => key in obj)