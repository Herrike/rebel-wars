import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const AllianceLogo = React.lazy(() =>
  import('../').then((module) => ({ default: module.AllianceLogo }))
)

const SwitchLang = React.lazy(() =>
  import('../').then((module) => ({ default: module.SwitchLang }))
)

const sections = ['planets', 'vehicles', 'species', 'starships']

const Navigation: FC = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li className='rebel-alliance-logo'>
          <Link data-testid='anchor-home' to={'/'}>
            <AllianceLogo />
          </Link>
        </li>
        {sections.map((section) => (
          <li key={section}>
            <Link data-testid={`anchor-${section}`} to={`/${section}`}>
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
