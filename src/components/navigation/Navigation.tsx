import React, { FC, useContext, MouseEvent } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { getParams, prepareQuery } from '../../utils/query'
import { isValidSection } from '../../utils/typeguards'

const SwitchLang = React.lazy(() => import('../').then(module => ({ default: module.SwitchLang })));
const Filter = React.lazy(() => import('../').then(module => ({ default: module.Filter })));

const sections = ['planets', 'vehicles', 'species', 'starships']

const Navigation:FC = () => {
  const { activeSection, querySection, setActiveSection, setQuerySection } = useContext(SectionContext)
  
  const changeSectionHandler = (event:MouseEvent<HTMLAnchorElement>): void => {
    const changedSection = event.currentTarget.dataset.section

    if(isValidSection(changedSection) && changedSection !== activeSection){
      setActiveSection(changedSection)
      const params = getParams(querySection)
      const query = prepareQuery(changedSection, params)
      setQuerySection(query)
    }
  }

  return (
    <nav className='main-nav'>
        <ul>
            {sections.map(section => (<li key={section}><a href={`#${section}`} data-testid={`anchor-${section}`}  data-section={section} onClick={changeSectionHandler}>{section}</a></li>))}
            <li className='lang'>Language <SwitchLang /></li>
        </ul>
        <Filter />
    </nav>
  )
}

export default Navigation