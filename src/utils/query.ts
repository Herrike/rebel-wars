import { SectionType } from "../contexts/sectionContext.types";

export const wookieeLang = 'wookiee'

export type QueryParams = {[key: string]: string}

export const getParams = (str: string): QueryParams => {
    return str.split(/[?&]/).slice(1).map(function(paramPair) {
        return paramPair.split(/=(.+)?/).slice(0, 2);
    }).reduce(function (obj, pairArray) {            
        obj[pairArray[0]] = pairArray[1];
        return obj;
    }, {} as QueryParams);
}

export const paramsToString = (params: QueryParams): string => {
    const queryPrefix = '/?'
    const paramPrefix = '&'
        let queryParams = ''
        const paramKeys = Object.keys(params)
        return  paramKeys.length > 0 ? paramKeys.reduce((acc: string, curr)=> {
            const parmStr = (`${curr}=${params[curr]}`)
            return `${acc}${acc === queryPrefix ? parmStr : paramPrefix + parmStr}`
        }, queryPrefix) : queryParams
}

export const prepareQuery = (activeSection: SectionType, params: QueryParams): string => {
    const queryParams = paramsToString(params)

    return `api/${activeSection}${queryParams}`
}
