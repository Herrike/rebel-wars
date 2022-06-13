import React, { FC, MouseEvent, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext';
import { filterContentByStrategy, getCommissionerNameBySection } from '../../utils/filters';
import { prepareQuery } from '../../utils/query';
import { isGenericResponseData, isPlanetsCollection, isSpeciesCollection, isFilterType } from '../../utils/typeguards';


const Filter:FC = () => {
    const { contentSection, activeSection, setContentSection, setQuerySection } = useContext(SectionContext)

    const filterPlanetsHandler = (event:MouseEvent<HTMLButtonElement>): void => {
        const filter = event.currentTarget.getAttribute('data-filter') || 'all'
        if(isGenericResponseData(contentSection) && (isPlanetsCollection(contentSection.results) || isSpeciesCollection(contentSection.results))){
            const response = {...contentSection}
            if(filter === 'all'){
                const query = prepareQuery(activeSection, {})
                setQuerySection(query)
            }
            else if(filter === 'strategy' && isFilterType(activeSection)){
                response.results = filterContentByStrategy(contentSection.results, activeSection)
                setContentSection(response)
            }
        }
    }
    return (
        isFilterType(activeSection) ? <ul>
            <li>
                Filter <strong>{activeSection.toUpperCase()}</strong> by:
            </li>
            <li>
                <button data-filter='strategy' onClick={filterPlanetsHandler}>{getCommissionerNameBySection(activeSection, true)} strategy</button>
            </li>
        </ul>: <></>
    )
}

export default Filter