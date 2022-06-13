import React, { FC, useContext, MouseEvent } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { getParams, prepareQuery } from '../../utils/query'
import { isValidSection } from '../../utils/typeguards'

const SwitchLang = React.lazy(() => import('../').then(module => ({ default: module.SwitchLang })));
const Filter = React.lazy(() => import('../').then(module => ({ default: module.Filter })));

const Navigation:FC = () => {
  const { activeSection, querySection, setActiveSection, setQuerySection } = useContext(SectionContext)
  
  const changeSectionHandler = (event:MouseEvent<HTMLAnchorElement>): void => {
    const section = event.currentTarget.dataset.section

    if(isValidSection(section) && section !== activeSection){
      setActiveSection(section)
      const params = getParams(querySection)
      const query = prepareQuery(section, params)
      setQuerySection(query)
    }
  }

  return (
    <nav>
        <ul>
            <li><a href="#planets" data-testid={'anchor-planets'} data-section={'planets'} onClick={changeSectionHandler}>Planets</a></li>
            <li><a href="#species" data-testid={'anchor-species'} data-section={'species'} onClick={changeSectionHandler}>Species</a></li>
            <li><a href="#vehicles" data-testid={'anchor-vehicles'} data-section={'vehicles'} onClick={changeSectionHandler}>Vehicles</a></li>
            <li><a href="#starships" data-testid={'anchor-starships'} data-section={'starships'} onClick={changeSectionHandler}>Starships</a></li>
            <li>Language <SwitchLang /></li>
        </ul>
        <Filter />
    </nav>
  )
}

export default Navigation