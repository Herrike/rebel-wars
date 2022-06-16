export interface Interest {
    preferred: string[]
    discarded: string[]
}

export interface Range {
    min: number
    max: number
}

export interface Strategies {
    planets: {
        [key: string]: Interest | Range
        climate: Interest
        terrain: Interest
        gravity: Range
    }
    species: {
        [key: string]: Interest
        classification: Interest
        designation: Interest
        skin_colors: Interest
    },
    starships: {
        [key: string]: Interest
        name: Interest
    }

}