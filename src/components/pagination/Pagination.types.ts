export interface PaginationProps { 
    items: number 
    page: string
    setPage: (page: string) => void
    disabled: boolean 
}
