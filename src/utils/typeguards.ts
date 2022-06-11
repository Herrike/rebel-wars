import {  SectionType } from "../contexts/sectionContext.types"
import { GenericResponseData } from "./typeguards.types"

export const isGenericObject = (item: unknown, withCollection?: boolean): item is Record<string, unknown> => {
    return item instanceof Object}

export const isGenericCollection = (collection: unknown): collection is unknown[] => {
    return Array.isArray(collection)
}

export const isGenericResponseData = (response: unknown): response is GenericResponseData => isGenericObject(response) && isGenericCollection(response.results) && 'count' in response

export const isValidSection = (section: string): section is SectionType => {
    return ['planets','vehicles','species'].includes(section)
}