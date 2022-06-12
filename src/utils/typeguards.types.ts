export interface GenericResponseData {
    [key: string]: unknown
    results: unknown[]
    count: number
    next: string
    prev: string | null
}