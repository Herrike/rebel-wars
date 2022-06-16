import React, { FC, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SectionContext } from '../../contexts/sectionContext'
import {
  isFilterType,
  isGenericCollection,
  isGenericResponseData,
  isPlanetsCollection
} from '../../utils/typeguards'
import { filterContentByStrategy, getCommissionerNameBySection } from '../../utils/filters'
import { Planet } from './Planets.types'
import { renderPlanet } from '../../utils/draw-planet'

const Filter = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Filter }))
)

const Pagination = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Pagination }))
)

const PlanetPreview: FC<{ planet: Planet }> = ({ planet }) => {
  const { name, diameter, gravity, surface_water, terrain } = planet
  const key = name.toLowerCase()
  const drawPlanet = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    if (drawPlanet.current) {
      renderPlanet(drawPlanet.current, { diameter, surface_water, terrain })
    }
  })

  return (
    <article key={key}>
      <h3>{name}</h3>
      <div className='planet-card'>
        <canvas ref={drawPlanet}>{''}</canvas>
        <ul>
          <li>diameter: {diameter}</li>
          <li>gravity: {gravity}</li>
          <li>surface water: {surface_water}</li>
          <li>terrain: {terrain}</li>
        </ul>
      </div>
    </article>
  )
}

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

  console.log(activeFilter, planets)

  useEffect(() => {
    if (isGenericResponseData(contentSection) && isGenericCollection(contentSection.results)) {
      const { results } = contentSection
      const updatedResults = [...results]
      if (searchParams.get('filter') === 'true' && isFilterType(activeSection)) {
        const filteredResults = filterContentByStrategy(updatedResults, activeSection)
        if (filteredResults.length && isPlanetsCollection(filteredResults)) {
          setPlanets(filteredResults)
        } else {
          setPlanets([])
        }
      } else if (isPlanetsCollection(updatedResults)) {
        setPlanets(updatedResults)
      }
    }
  }, [contentSection, searchParams])

  return (
    <>
      <Filter
        section={activeSection}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <h2>{activeSection}</h2>

      <section className='grid'>
        {planets?.map((planet) => (
          <div key={planet.name.toLowerCase()}>
            <PlanetPreview planet={planet} />
          </div>
        ))}
        {!planets?.length && activeFilter && (
          <p>
            Scanner results: no <strong>{activeSection}</strong> found for{' '}
            {getCommissionerNameBySection(activeSection, true)} strategy
          </p>
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
