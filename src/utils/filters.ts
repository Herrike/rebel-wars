import { SectionType } from "../contexts/sectionContext.types";
import { getGravity, isNumberInRange } from "./query";
import { Strategies } from "./filters.types";
import { isPlanetsCollection, isSpeciesCollection, isStarshipsCollection } from "./typeguards";

const sectionCommissioner = {
    planets: 'Admiral',
    vehicles: 'Admiral',
    species: 'Princess',
    starships: 'Admiral',
}

export const getCommissionerNameBySection = (section: SectionType, withGenitive = false): string => {
    // returns empty string if no section is selected
    if(!section) {
        return section
    }
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
    },
    starships: {
        name: {
            preferred: [],
            discarded: ['Death Star']
        }
    }
}

export const filterContentByStrategy = (results: unknown[], activeSection: Extract<'planets'|'species'|'starships', SectionType>): unknown[] => {
    let filteredResults: unknown[] = []
    if(activeSection === 'planets' && isPlanetsCollection(results)){
        const {climate, terrain, gravity: {min, max}} = strategies.planets
        filteredResults = results.filter((result) => {
            const parsedGravity = getGravity(result.gravity)
            return climate.preferred.includes(result.climate) && !climate.discarded.includes(result.climate) && terrain.preferred.some(t => result.terrain.includes(t)) && typeof parsedGravity === 'number' && isNumberInRange(parsedGravity, min , max);
        })

        
    }
    else if(activeSection === 'species' && isSpeciesCollection(results)){
        const {classification, designation, skin_colors} = strategies.species
        filteredResults = results.filter((result) => {
            return classification.preferred.includes(result.classification) && !classification.discarded.includes(result.classification) && designation.preferred.includes(result.designation) && !skin_colors.preferred.includes(result.skin_colors);
        })
    }
    else if(activeSection === 'starships' && isStarshipsCollection(results)){
        const {name} = strategies.starships
        filteredResults = results.filter((result) => {
            return !name.discarded.includes(result.name);
        })
    }
    return filteredResults.length > 0 ? filteredResults : []
}

export const getVehicleType = (max_atmosphering_speed: string):string => {
    const max_speed = parseInt(max_atmosphering_speed)
    if(isNaN(max_speed)){
        return 'unknown'
    }
    else {
        return `${max_speed <= 100?  'land' : 'aerial'} vehicle`
    }
}