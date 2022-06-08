import {FC} from 'react'
import { Planet } from './Planets.types'


const parseValueToNumber = (value: number | string) => typeof value === 'string' ? parseInt(value) : value;

const Planets: FC<{planets:  Planet[]}> = ({planets}) => {
    console.log(planets)
    return <div>
        {
        planets.map(({name, diameter, gravity, population, surface_water, terrain})=> {
            return <div>
                <article>
                    <h3>{name}</h3>
                     <ul>
                         <li>diameter: {diameter}</li>
                         <li>gravity: {gravity}</li>
                         <li>population: {population}</li>
                         <li>surface water: {surface_water}</li>
                         <li>terrain: {terrain}</li>
                     </ul>
                </article>
            </div>
        })
    }
    </div>
}

export default Planets