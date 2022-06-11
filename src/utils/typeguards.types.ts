export interface GenericResponseData {
    [key: string]: unknown
    resuts: unknown[]
    count: number
    next: string
    prev: string | null
}