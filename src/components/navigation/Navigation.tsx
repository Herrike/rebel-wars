import React, { FC, useContext, MouseEvent } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { isValidSection } from '../../utils/typeguards'

const Navigation:FC = () => {
  const { activeSection, setActiveSection, setQuerySection } = useContext(SectionContext)
  const changeSectionHandler = (event:MouseEvent<HTMLAnchorElement>): void => {
    const section = event.currentTarget.href.split('#')[1]

    if(isValidSection(section) && section !== activeSection){
      setActiveSection(section)
      setQuerySection(`api/${section}`)
    }
  }

  return (
    <nav>
        <ul>
            <li><a href="#planets" data-testid={'anchor-planets'} onClick={changeSectionHandler}>Planets</a></li>
            <li><a href="#species" data-testid={'anchor-species'} onClick={changeSectionHandler}>Species</a></li>
            <li><a href="#vehicles" data-testid={'anchor-vehicles'} onClick={changeSectionHandler}>Vehicles</a></li>
        </ul>
    </nav>
  )
}

export default Navigation