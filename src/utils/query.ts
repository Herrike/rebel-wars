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

export const getPageParam = (page: string): string => parseInt(page) > 1 ? `?page=${page}` : ''
