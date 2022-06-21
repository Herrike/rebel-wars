/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, MouseEvent } from 'react'
import { SectionType } from '../../contexts/sectionContext.types'
import { getCommissionerNameBySection } from '../../utils/filters'

const Filter: FC<{
  section: SectionType
  activeFilter: boolean
  setActiveFilter: (activeFilter: boolean) => void
}> = ({ section, activeFilter, setActiveFilter }) => {
  const filterPlanetsHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    setActiveFilter(!activeFilter)
  }

  return (
    <ul className='filter'>
      <li>
        Filter <strong>{section.toUpperCase()}</strong> by:
      </li>
      <li>
        <button
          onClick={filterPlanetsHandler}
          data-filter={activeFilter}
          title='filters results per page'
        >
          {getCommissionerNameBySection(section, true)} strategy
        </button>
      </li>
    </ul>
  )
}

export default Filter
