import React, {FC} from 'react'



const Planets: FC<{resourceName: string}> = ({resourceName, }) => {

    return  (
    <section>
        {/* {planets?.map(({name, diameter, gravity, population, surface_water, terrain}) => {
            const key = name.toLowerCase()
            return(<article key={key}>
                <h3>{name}</h3>
                    <ul>
                        <li>diameter: {diameter}</li>
                        <li>gravity: {gravity}</li>
                        <li>population: {population}</li>
                        <li>surface water: {surface_water}</li>
                        <li>terrain: {terrain}</li>
                    </ul>
            </article>)
        })} */}
    </section>)
}

export default Planets