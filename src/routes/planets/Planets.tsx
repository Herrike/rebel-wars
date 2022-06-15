import React, { FC, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SectionContext } from '../../contexts/sectionContext'
import { isFilterType, isGenericResponseData, isPlanetsCollection } from '../../utils/typeguards'
import { filterContentByStrategy } from '../../utils/filters'
import { Planet } from './Planets.types'

const Filter = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Filter }))
)

const Pagination = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Pagination }))
)

const Planets: FC = () => {
  const { activeSection, contentSection } = useContext(SectionContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const [planets, setPlanets] = useState<Planet[] | null>(null)
  const [activeFilter, setActiveFilter] = useState<boolean>(false)
  const [page, setPage] = useState<string>('1')

  useEffect(() => {
    const filter = `${activeFilter}`
    if (activeFilter === true) {
      setSearchParams({ page: `${page}`, filter })
    } else {
      setSearchParams({ page: `${page}` })
    }
  }, [activeFilter, page])

  useEffect(() => {
    if (isGenericResponseData(contentSection) && isPlanetsCollection(contentSection?.results)) {
      const { results } = contentSection
      let updatedResults = [...results]
      if (searchParams.get('filter') === 'true' && isFilterType(activeSection)) {
        const filteredResults = filterContentByStrategy(updatedResults, activeSection)
        if (isPlanetsCollection(filteredResults)) {
          updatedResults = filteredResults
        }
      }
      setPlanets(updatedResults)
    }
  }, [contentSection, searchParams])

  return (
    <>
      <Filter
        section={activeSection}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <h2>Collection: {activeSection}</h2>
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
          }
        )}
      </section>
      {isGenericResponseData(contentSection) && contentSection?.count > 10 && (
        <Pagination
          items={contentSection.count}
          page={page}
          setPage={setPage}
          disabled={activeFilter}
        />
      )}
    </>
  )
}

export default Planets
