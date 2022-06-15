import { SectionType } from "../contexts/sectionContext.types";

export const wookieeLang = 'wookiee'

export type QueryParams = {[key: string]: string}

export const getParams = (str: string): QueryParams => {
    return str.split(/[?&]/).slice(1).map((paramPair) => {
        return paramPair.split(/=(.+)?/).slice(0, 2);
    }).reduce((obj, pairArray) => {            
        obj[pairArray[0]] = pairArray[1];
        return obj;
    }, {} as QueryParams);
}

export const paramsToString = (params: QueryParams): string => {
    const queryPrefix = '/?'
    const paramPrefix = '&'
        const queryParams = ''
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

export const getGravity = (str: string): number | string => {
    
    if(str.includes('standard') && !str.includes(',')){
        return parseFloat(str.split(' ')[0])
    }
    else if(str.includes('surface') && str.includes(',')){
        // multiple gravity params
        const gravities = str.split(',')
        const gravityIndex = gravities.findIndex(gravity => gravity.includes('surface'))

        return parseFloat(gravities[gravityIndex].split(' ')[0])
    }
    else if(str === 'N/A' || str === 'unkwnown'){
        return str
    }
    else return str
}

export const isNumberInRange = (value: number, min = 0, max = 1): boolean => {
    return value >= min && value <= max
}

export const getPageParam = (page: string): string => parseInt(page) > 1 ? `?page=${page}` : ''
