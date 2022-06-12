import React, {FC, useContext, useEffect, useState} from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { isGenericResponseData, isStarshipsCollection } from '../../utils/typeguards'
import { Starship } from './Starships.types'



const Starships: FC = () => {
    const [starships, setStarships] = useState<Starship[]|null>(null)
    const { contentSection } = useContext(SectionContext)
    useEffect(()=> {
        if(isGenericResponseData(contentSection) && isStarshipsCollection(contentSection?.results)){
        setStarships(contentSection.results)
    }
    }, [contentSection, starships])
    
    return  (
    <section>
        {starships?.map(({  
            cargo_capacity,
            cost_in_credits,
            hyperdrive_rating,
            length,
            manufacturer,
            max_atmosphering_speed,
            model,
            name,
            passengers,
            starship_class
        }) => {
            const key = name.toLowerCase()
            return(<article key={key}>
                <h3>{name}</h3>
                    <ul>
                    <li>model: {model}</li>
                    <li>starship class: {starship_class}</li>
                    <li>manufacturer: {manufacturer}</li>
                    <li>length: {length}</li>
                    <li>hyperdrive rating: {hyperdrive_rating}</li>
                    <li>max atmosphering speed: {max_atmosphering_speed}</li>
                    <li>cost in credits: {cost_in_credits}</li>
                    <li>cargo capacity: {cargo_capacity}</li>
                    <li>passengers: {passengers}</li>
                    </ul>
            </article>)
        })}
    </section>)
}

export default Starships