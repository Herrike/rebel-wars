import React, { FC, MouseEvent, useContext, useState } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { filterContentByStrategy, getCommissionerNameBySection } from '../../utils/filters'
import { prepareQuery } from '../../utils/query'
import {
  isGenericResponseData,
  isPlanetsCollection,
  isSpeciesCollection,
  isFilterType,
} from '../../utils/typeguards'

const Filter: FC = () => {
  const { contentSection, activeSection, setContentSection, setQuerySection } =
    useContext(SectionContext)
  const [clicked, setClicked] = useState(false)
  const query = prepareQuery(activeSection, {})
  const filterPlanetsHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    const filter = event.currentTarget.getAttribute('data-filter') || 'all'
    if (
      isGenericResponseData(contentSection) &&
      (isPlanetsCollection(contentSection.results) || isSpeciesCollection(contentSection.results))
    ) {
      const response = { ...contentSection }
      if (filter === 'all') {
        setQuerySection(query)
      } else if (filter === 'strategy' && isFilterType(activeSection)) {
        if (clicked === false) {
          response.results = filterContentByStrategy(contentSection.results, activeSection)
          setContentSection(response)
          setClicked(true)
        } else {
          setQuerySection(query)
          setClicked(false)
        }
      }
    }
  }

  return isFilterType(activeSection) ? (
    <ul className='filter'>
      <li>
        Filter <strong>{activeSection.toUpperCase()}</strong> by:
      </li>
      <li>
        <button data-filter='strategy' onClick={filterPlanetsHandler} data-clicked={clicked}>
          {getCommissionerNameBySection(activeSection, true)} strategy
        </button>
      </li>
    </ul>
  ) : (
    <></>
  )
}

export default Filter
