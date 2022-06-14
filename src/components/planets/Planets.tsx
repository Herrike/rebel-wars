import React, { FC, useContext, useEffect, useState } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { isGenericResponseData, isPlanetsCollection } from '../../utils/typeguards'
import { Planet } from './Planets.types'

const Planets: FC = () => {
  const [planets, setPlanets] = useState<Planet[] | null>(null)
  const { contentSection } = useContext(SectionContext)
  useEffect(() => {
    if (isGenericResponseData(contentSection) && isPlanetsCollection(contentSection?.results)) {
      setPlanets(contentSection.results)
    }
  }, [contentSection, planets])

  return (
    <section className='grid'>
      {planets?.map(
        ({ name, diameter, gravity, population, surface_water, terrain, orbital_period }) => {
          const key = name.toLowerCase()
          return (
            <article key={key}>
              <h3>{name}</h3>
              <ul>
                <li>diameter: {diameter}</li>
                <li>gravity: {gravity}</li>
                <li>population: {population}</li>
                <li>surface water: {surface_water}</li>
                <li>terrain: {terrain}</li>
                <li>orbital period: {orbital_period}</li>
              </ul>
            </article>
          )
        },
      )}
    </section>
  )
}

export default Planets
