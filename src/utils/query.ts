import { LangType, SectionType } from "../contexts/sectionContext.types";

export const wookieeLang = 'wookiee'

export type QueryParam = {[key: string]: string}

export const getParamValue = (url: string, key: string): string => {
    const searchParams = new URLSearchParams(url);
    return searchParams.get(key) || ''
}

export const setParamValue = (url: string, key: string, value: string): {[key: string]: string} => {
    const searchParams = new URLSearchParams(url);
    searchParams.set(key, value)
    return searchParams as unknown as {[key: string]: string}
}

export const paramsToString = (params: QueryParam[] = [], activeLang?: LangType): string => {
    const queryPrefix = '/?'
    const paramPrefix = '&'
    let queryParams = ''
        queryParams = params.length > 0 ? params?.reduce((acc: string, curr: QueryParam)=> {
            const parmStr = Object.keys(curr).map(key => `${key}=${curr[key]}`).join("&");
            return `${acc}${acc === queryPrefix ? parmStr : paramPrefix + parmStr}`
        }, queryPrefix) : queryParams

    if(activeLang && activeLang === wookieeLang){
        const wookieParam = `format=${wookieeLang}`
        queryParams = `${queryParams}${queryParams === queryPrefix ? wookieParam : paramPrefix + wookieParam}`
    }
    return queryParams
}

export const prepareQuery = (activeSection: SectionType, activeLang: LangType, params?: QueryParam[]): string => {
    const queryParams = paramsToString(params, activeLang)

    return `api/${activeSection}${queryParams}`
}
