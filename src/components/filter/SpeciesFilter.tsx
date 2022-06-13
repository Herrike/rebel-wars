import { FC, MouseEvent, useState, useContext } from "react"
import { SectionContext } from "../../contexts/sectionContext"
import { filterContentByStrategy } from "../../utils/strategies"
import { isGenericResponseData, isStrategyType, isSpeciesCollection } from "../../utils/typeguards"
import { Specie } from "../species/Species.types"

const SpeciesFilter: FC = () => {
    const [wholeCollection, setWholeCollection] = useState<Specie[]>([])
    const { contentSection, activeSection, setContentSection } = useContext(SectionContext)
    const filterPlanetsHandler = (event:MouseEvent<HTMLButtonElement>): void => {
        const filter = event.currentTarget.getAttribute('data-filter') || 'all'
        if(isGenericResponseData(contentSection) && isSpeciesCollection(contentSection.results)){
            const response = {...contentSection}
            if(filter === 'all'){
                if(wholeCollection.length > 0){
                    response.results = wholeCollection
                    setContentSection(response)
                }
                else {
                    setWholeCollection(contentSection.results)
                }
            }
            else if(filter === 'strategy' && isStrategyType(activeSection)){
                const collection = wholeCollection.length > 0 ? wholeCollection : contentSection.results
                response.results = filterContentByStrategy(collection, activeSection)
                setContentSection(response)
            }
        }
    }
    return (
        <ul>

            <li>
                Filter Planets by:
            </li>
            <li>
                <button data-filter='all' onClick={filterPlanetsHandler}>all</button>
            </li>
            <li>
                <button data-filter='strategy' onClick={filterPlanetsHandler}>Admiral's strategy</button>
            </li>
        </ul>
    )
}

export default SpeciesFilter