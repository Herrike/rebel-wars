import { LangType, SectionType } from "../contexts/sectionContext.types";

export const wookieeLang = 'wookiee'

export const prepareQuery = (activeSection: SectionType, activeLang?: LangType, search?: Record<string, string>): string => {
    let params = ''
    if(activeLang === wookieeLang){
        const wookieeLangParam = `format=${wookieeLang}`
        const prefix = !params ? '/?' : ''
        params = !params ? prefix + wookieeLangParam : params + wookieeLangParam ;
    }

    return `api/${activeSection}${params}`
}