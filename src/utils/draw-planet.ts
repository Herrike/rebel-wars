/* eslint-disable @typescript-eslint/no-non-null-assertion */

// https://codepen.io/loktar00/pen/AYxMvO (kudos to this dev)
import { PlanetAttributes, PlanetColor, PlanetComposition, PreparedCanvas } from "./draw-planet.types"

export const getRGBAColor = (red: number, green: number, blue: number): PlanetColor => ({
    r: red,
    g: green,
    b: blue
})

export const getColorFromPlanetAttributes = (planetComposition: PlanetComposition): PlanetColor => {
    const {surface_water, terrain} = planetComposition
    const water = parseFloat(surface_water)
    const surface = terrain.toLowerCase()
    if(!isNaN(water) && water >= 40){
        return getRGBAColor(70, 130, 180)
    }
    if(['plains', 'rainforests', 'forests', 'jungles', 'grass', 'swamps', 'verdant'].some(s => surface.includes(s))){
        return getRGBAColor(40, 180, 99)
    }
    if(surface.includes('desert')){
        return getRGBAColor(245, 176, 65)
    }
    else if(['ice', 'frozen'].some(s => surface.includes(s))){
        return getRGBAColor(255, 255, 255)
    }
    else if(['lava', 'volcano'].some(s => surface.includes(s))){
        return getRGBAColor(231, 76, 60)
    }
    else if(['mountains', 'canyons', 'rocky'].some(s => surface.includes(s))){
        return getRGBAColor(120, 66, 18)
    }
    else if(['urban', 'cityscape'].some(s => surface.includes(s))){
        return getRGBAColor(100, 100, 100)
    }
    else if(['asteroid', 'unknown','ash'].some(s => surface.includes(s))){
        return getRGBAColor(25, 25, 25)
    }
    return {
        r: ~~ (Math.random() * 255),
        g: ~~ (Math.random() * 255),
        b: ~~ (Math.random() * 255)
    }
}

export const getPlanetAttributes = (width: number, height: number, planetComposition: PlanetComposition) => {
    const color = getColorFromPlanetAttributes(planetComposition)
    return {
        rad: ~~ (height / 2),
        x: ~~ (width / 2),
        y: ~~ (height / 2),
        color
    }
}

export const prepareCanvas = (canvas: HTMLCanvasElement, planetComposition: PlanetComposition): PreparedCanvas => {
    const ctx = canvas.getContext('2d')!
    const width = 100
    const height = 100
    const planetAttrs = getPlanetAttributes(width, height, planetComposition)
   
    return {
        canvas,
        ctx,
        width,
        height,
        planetAttrs
    }
}
export const drawPlanet = (ctx: CanvasRenderingContext2D, planetAttrs: PlanetAttributes) => {
    const {color, rad, x: xc, y: yc} = planetAttrs

    ctx.strokeStyle = '#111'
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(xc, yc, rad, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";

    for (let y = -rad; y < rad; y++) {
        const x1 = Math.round(Math.sqrt(rad * rad - y * y));
        for (let x = -x1; x < x1; x++) {
            const n = Math.round(Math.random() * x1)/1.5;
          
            if (n > x1 + x) {
                ctx.fillRect(x + xc, y + yc, 1.5, 1.25);
                ctx.stroke()
            }

        }
    }
}

export const renderPlanet = (canvasEl: HTMLCanvasElement, planetComposition: PlanetComposition) => {
    const {ctx, planetAttrs} = prepareCanvas(canvasEl, planetComposition)
    drawPlanet(ctx, planetAttrs);
}