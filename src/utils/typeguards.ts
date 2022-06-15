import { Planet } from "../routes/planets/Planets.types"
import { Specie } from "../routes/species/Species.types"
import { Starship } from "../routes/starships/Starships.types"
import { Vehicle } from "../routes/vehicles/Vehicles.types"
import { SectionType } from "../contexts/sectionContext.types"
import { objectHasAllRequiredKeys } from "./object"
import { GenericResponseData } from "./typeguards.types"

export const isGenericObject = (item: unknown): item is Record<string, unknown> => {
    return item instanceof Object}

export const isGenericObjectWithKey = (item: unknown, key: string): item is {
    [key: string]:  string
    } => {
        return item instanceof Object && key in item}

export const isGenericCollection = (collection: unknown): collection is unknown[] => {
    return Array.isArray(collection)
}

export const isGenericResponseData = (response: unknown): response is GenericResponseData => isGenericObject(response) && isGenericCollection(response.results) && 'count' in response

export const isPlanet = (item: unknown, requiredKeys = ['name', 'diameter', 'gravity', 'population', 'terrain']): item is Planet => objectHasAllRequiredKeys(item, requiredKeys)

export const isPlanetsCollection = (collection: unknown): collection is Planet[] => Array.isArray(collection) && isPlanet(collection[0])

export const isSpecie = (item: unknown, requiredKeys = ['people', 'homeworld', 'classification', 'designation', 'language']): item is Specie => objectHasAllRequiredKeys(item, requiredKeys)

export const isSpeciesCollection = (collection: unknown): collection is Specie[] => Array.isArray(collection) && isSpecie(collection[0])

export const isVehicle = (item: unknown, requiredKeys = ['model', 'vehicle_class', 'manufacturer', 'length', 'cost_in_credits']): item is Vehicle => objectHasAllRequiredKeys(item, requiredKeys)

export const isVehiclesCollection = (collection: unknown): collection is Vehicle[] => Array.isArray(collection) && isVehicle(collection[0])

export const isStarship = (item: unknown, requiredKeys = ['model', 'starship_class', 'manufacturer', 'length', 'cost_in_credits']): item is Starship => objectHasAllRequiredKeys(item, requiredKeys)

export const isStarshipsCollection = (collection: unknown): collection is Starship[] => Array.isArray(collection) && isStarship(collection[0])

export const isValidSection = (section: unknown): section is SectionType => {
    return typeof section === 'string' && ['planets', 'vehicles', 'species', 'starships', ''].includes(section)
}

export const isFilterType = (section: SectionType): section is Extract<'planets'|'species'|'starships',SectionType> =>  section !== 'vehicles'

