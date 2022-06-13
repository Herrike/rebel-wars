import { SectionType } from "../contexts/sectionContext.types";
import { getGravity, isNumberInRange } from "./query";
import { Strategies } from "./strategies.types";
import { isPlanetsCollection, isSpeciesCollection } from "./typeguards";

const sectionCommissioner = {
    planets: 'Admiral',
    vehicles: 'Admiral',
    species: 'Princess',
    starships: 'Admiral',
}

export const getCommissionerNameBySection = (section: SectionType, withGenitive = false): string => {
    const name = sectionCommissioner[`${section}`]
    if(withGenitive){
        return `${name}'${name.toLowerCase().slice(-1) === 's' ? '' : 's' }`
    }
    return name
}

export const strategies: Strategies = {
    planets: {
        climate: {
            preferred: ['temperate', 'arid', 'tropical'],
            discarded: ['artic', 'subartic', 'frigid', 'frozen']
        },
        terrain: {
            preferred: ['mountains', 'forests', 'valleys'],
            discarded: []
        },
        gravity: {
            min: 0.85,
            max: 1.2
        }
    },
    species: {
        classification: {
            preferred: ['mammal', 'gastropod', 'amphibian'],
            discarded: ['droid', 'reptilian']
        },
        designation: {
            preferred: ['sentient'],
            discarded: []
        },
        skin_colors: {
            preferred: [],
            discarded: ['pink', 'peach']
        }
    }
}

export const filterContentByStrategy = (results: unknown[], activeSection: Extract<'planets'|'species', SectionType>): unknown[] => {
    if(activeSection === 'planets' && isPlanetsCollection(results)){
        const {climate, terrain, gravity: {min, max}} = strategies.planets
        return results.filter((result) => {
            const parsedGravity = getGravity(result.gravity)
            return climate.preferred.includes(result.climate) && !climate.discarded.includes(result.climate) && terrain.preferred.some(t => result.terrain.includes(t)) && typeof parsedGravity === 'number' && isNumberInRange(parsedGravity, min , max);
        })
    }
    else if(activeSection === 'species' && isSpeciesCollection(results)){
        const {classification, designation, skin_colors} = strategies.species
        return results.filter((result) => {
            return classification.preferred.includes(result.classification) && !classification.discarded.includes(result.classification) && designation.preferred.includes(result.designation) && !skin_colors.preferred.includes(result.skin_colors);
        })
    }

    return results
}
