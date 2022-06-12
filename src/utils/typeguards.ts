import { Planet } from "../components/planets/Planets.types"
import { Specie } from "../components/species/Species.types"
import { Starship } from "../components/starships/Starships.types"
import { Vehicle } from "../components/vehicles/Vehicles.types"
import { LangType, SectionType } from "../contexts/sectionContext.types"
import { objectHasAllRequiredKeys } from "./object"
import { GenericResponseData } from "./typeguards.types"

export const isGenericObject = (item: unknown): item is Record<string, unknown> => {
    return item instanceof Object}

export const isGenericCollection = (collection: unknown): collection is unknown[] => {
    return Array.isArray(collection)
}

export const isGenericResponseData = (response: unknown): response is GenericResponseData => isGenericObject(response) && isGenericCollection(response.results) && 'count' in response

export const isPlanetsCollection = (collection: unknown, requiredKeys = ['name', 'diameter', 'gravity', 'population', 'terrain']): collection is Planet[] => Array.isArray(collection) && objectHasAllRequiredKeys(collection[0], requiredKeys)

export const isSpeciesCollection = (collection: unknown, requiredKeys = ['people', 'homeworld', 'classification', 'designation', 'language']): collection is Specie[] => Array.isArray(collection) && objectHasAllRequiredKeys(collection[0], requiredKeys)

export const isVehiclesCollection = (collection: unknown, requiredKeys = ['model', 'vehicle_class', 'manufacturer', 'length', 'cost_in_credits']): collection is Vehicle[] => Array.isArray(collection) && objectHasAllRequiredKeys(collection[0], requiredKeys)

export const isStarshipsCollection = (collection: unknown, requiredKeys = ['model', 'starship_class', 'manufacturer', 'length', 'cost_in_credits']): collection is Starship[] => Array.isArray(collection) && objectHasAllRequiredKeys(collection[0], requiredKeys)

export const isValidSection = (section: unknown): section is SectionType => {
    return typeof section === 'string' && ['planets','vehicles','species', 'starships'].includes(section)
}

export const isValidLang = (lang: string): lang is LangType => {
    return lang === 'wookiee' || lang === ''
}
