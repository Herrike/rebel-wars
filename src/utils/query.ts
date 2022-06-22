import { getEnvVar } from "./env-vars"

export const wookieeLang = 'wookiee'

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

// used to manipulate page filter at our disposal (we don't want to pass it to fetch fn when page is 1, for instance
export const getPageParam = (page: string | null): string => {
    if(!page){
        return ''
    }
    return parseInt(page) > 1 ? `?page=${page}` : ''
}

export const getApiDomain = (): string => {
    const env = getEnvVar('NODE_ENV')
    const api = getEnvVar('REACT_APP_SWAPI')
    return env === 'production' && api ? api : ''
}

export const getApiPath = (apiDomainUrl: string, pathname: string, searchParams: URLSearchParams) => `${apiDomainUrl}/api${pathname}${getPageParam(searchParams.get('page'))}`