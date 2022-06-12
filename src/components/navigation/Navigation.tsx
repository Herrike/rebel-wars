import React, { FC, useContext, MouseEvent } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { prepareQuery } from '../../utils/query'
import { isValidSection } from '../../utils/typeguards'

const SwitchLang = React.lazy(() => import('../').then(module => ({ default: module.SwitchLang })));

const Navigation:FC = () => {
  const { activeSection, activeLang, setActiveSection, setQuerySection } = useContext(SectionContext)
  
  const changeSectionHandler = (event:MouseEvent<HTMLAnchorElement>): void => {
    const section = event.currentTarget.href.split('#')[1]

    if(isValidSection(section) && section !== activeSection){
      setActiveSection(section)
      const query = prepareQuery(section, activeLang)
      setQuerySection(query)
    }
  }

  return (
    <nav>
        <ul>
            <li><a href="#planets" data-testid={'anchor-planets'} onClick={changeSectionHandler}>Planets</a></li>
            <li><a href="#species" data-testid={'anchor-species'} onClick={changeSectionHandler}>Species</a></li>
            <li><a href="#vehicles" data-testid={'anchor-vehicles'} onClick={changeSectionHandler}>Vehicles</a></li>
            <li><a href="#starships" data-testid={'anchor-starships'} onClick={changeSectionHandler}>Starships</a></li>
        </ul>
        <SwitchLang />
    </nav>
  )
}

export default Navigation