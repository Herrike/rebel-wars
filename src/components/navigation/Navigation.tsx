import React, { FC, useContext, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { SectionContext } from '../../contexts/sectionContext'
import { getParams, prepareQuery } from '../../utils/query'
import { isValidSection } from '../../utils/typeguards'

const SwitchLang = React.lazy(() =>
  import('../').then((module) => ({ default: module.SwitchLang }))
)

const sections = ['planets', 'vehicles', 'species', 'starships']

const Navigation: FC = () => {
  const { activeSection, querySection, setActiveSection, setQuerySection } =
    useContext(SectionContext)

  const changeSectionHandler = (event: MouseEvent<HTMLAnchorElement>): void => {
    const changedSection = event.currentTarget.dataset.section

    if (isValidSection(changedSection) && changedSection !== activeSection) {
      setActiveSection(changedSection)
      const params = getParams(querySection)
      const query = prepareQuery(changedSection, params)
      setQuerySection(query)
    }
  }

  return (
    <nav className='main-nav'>
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <Link
              data-testid={`anchor-${section}`}
              to={`/${section}`}
              onClick={changeSectionHandler}
            >
              {section}
            </Link>
          </li>
        ))}
        <li className='lang'>
          Language <SwitchLang />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
