export interface PlanetColor {
    r: number,
    g: number,
    b: number
}

export interface PlanetComposition {
    surface_water: string
    terrain: string,
    diameter?: string
}

export interface PlanetAttributes {
    rad: number
    x: number
    y: number
    color: PlanetColor
}

export interface PreparedCanvas {
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    planetAttrs: PlanetAttributes
}

