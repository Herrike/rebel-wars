import React, {FC, useContext, useEffect, useState} from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { isGenericResponseData, isVehiclesCollection } from '../../utils/typeguards'
import { Vehicle } from './Vehicles.types'



const Vehicles: FC = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]|null>(null)
    const { contentSection } = useContext(SectionContext)
    useEffect(()=> {
        if(isGenericResponseData(contentSection) && isVehiclesCollection(contentSection?.results)){
        setVehicles(contentSection.results)
    }
    }, [contentSection, vehicles])
    
    return  (
    <section>
        {vehicles?.map(({name, vehicle_class, model, max_atmosphering_speed, manufacturer, length,cost_in_credits, cargo_capacity,passengers}) => {
            const key = name.toLowerCase()
            return(<article key={key}>
                <h3>{name}</h3>
                    <ul>
                        <li>model: {model}</li>
                        <li>vehicle class: {vehicle_class}</li>
                        <li>manufacturer: {manufacturer}</li>
                        <li>length: {length}</li>
                        <li>max atmosphering speed: {max_atmosphering_speed}</li>
                        <li>cost in credits: {cost_in_credits}</li>
                        <li>cargo capacity: {cargo_capacity}</li>
                        <li>passengers: {passengers}</li>
                    </ul>
            </article>)
        })}
    </section>)
}

export default Vehicles