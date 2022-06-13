import React, { FC, MouseEvent, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext';
import { getParams, prepareQuery, QueryParams } from '../../utils/query';

const PlanetsFilter: FC = () => {
    const { activeSection, querySection, setQuerySection } = useContext(SectionContext)
    const filterPlanetsHandler = (event:MouseEvent<HTMLButtonElement>): void => {
        let params: QueryParams = getParams(querySection)
        params.climate = `temperate`
        params.climate = `tropical`
        const query = prepareQuery(activeSection, params)
        setQuerySection(query)
    }
    return (
        <ul>
            <li>
                <button onClick={filterPlanetsHandler}>Admiral's strategy</button>
            </li>
        </ul>
    )
}

const components = {
    planets: PlanetsFilter,
    vehicles: () => <div>filter for vehicles</div>,
    species: () => <div>filter for species</div>,
    starships: () => <div>filter for starships</div>,
};

const Filter:FC = () => {
    const { activeSection } = useContext(SectionContext)

    const Strategies = components[`${activeSection}`];
    return <Strategies />
}

export default Filter