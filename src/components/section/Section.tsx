import React, { FC, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext'

const Planets = React.lazy(() => import('../').then(module => ({ default: module.Planets })));
const Species = React.lazy(() => import('../').then(module => ({ default: module.Species })));
const Vehicles = React.lazy(() => import('../').then(module => ({ default: module.Vehicles })));
const Starships = React.lazy(() => import('../').then(module => ({ default: module.Starships })));
const Pagination = React.lazy(() => import('../').then(module => ({ default: module.Pagination })));

const components = {
    planets: Planets,
    vehicles: Vehicles,
    species: Species,
    starships: Starships,
};

const Section:FC = () => {
  const { activeSection, contentSection } = useContext(SectionContext)

  const Content = components[`${activeSection}`];
  return (<>
    I selected collection: {activeSection}. and I will show max 10 results
    <Content />
    {contentSection && contentSection?.count > 10 && <Pagination />}
    </>
  )
}

export default Section