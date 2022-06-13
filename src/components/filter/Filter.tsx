import React, { FC, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext';

const PlanetsFilter = React.lazy(() => import('../').then(module => ({ default: module.PlanetsFilter })));
const SpeciesFilter = React.lazy(() => import('../').then(module => ({ default: module.SpeciesFilter })));

const components = {
    planets: PlanetsFilter,
    species: SpeciesFilter,
    vehicles: () => <></>,
    starships: () => <></>,
};

const Filter:FC = () => {
    const { activeSection } = useContext(SectionContext)

    const Strategies = components[`${activeSection}`];
    return <Strategies />
}

export default Filter