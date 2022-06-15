import React, { FC, Suspense, useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import { isGenericResponseData, isPlanetsCollection } from '../../utils/typeguards'
import { filterContentByStrategy } from '../../utils/filters'
import { getPageParam } from '../../utils/query'
import { Planet } from './Planets.types'

const Loading = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Loading }))
)
const ApiError = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.ApiError }))
)
const Filter = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Filter }))
)

const Pagination = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Pagination }))
)

const Planets: FC = () => {
  const section = 'planets'
  const { pathname } = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [planets, setPlanets] = useState<Planet[] | null>(null)
  const [activeFilter, setActiveFilter] = useState<boolean>(false)
  const [page, setPage] = useState('')

  const { data, error } = useFetch(`api/${pathname}${getPageParam(page)}`)

  useEffect(() => {
    if (isGenericResponseData(data) && isPlanetsCollection(data?.results)) {
      const { results } = data
      let updatedResults = [...results]
      if (searchParams.get('filter') === 'true') {
        const filteredResults = filterContentByStrategy(updatedResults, section)
        if (isPlanetsCollection(filteredResults)) {
          updatedResults = filteredResults
        }
      }
      setPlanets(updatedResults)
    }
  }, [data, searchParams])

  useEffect(() => {
    if (parseInt(page) > 1) {
      searchParams.set('page', `${page}`)
    }
  }, [page])

  useEffect(() => {
    const filter = `${activeFilter}`
    setSearchParams({ filter })
  }, [activeFilter])

  return (
    <Suspense fallback={<Loading />}>
      {error ? (
        <ApiError error={error} />
      ) : (
        <>
          <Filter section={section} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <h2>Collection: {section}</h2>
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
          {isGenericResponseData(data) && data?.count > 10 && activeFilter === false && (
            <Pagination items={data.count} setPage={setPage} />
          )}
        </>
      )}
    </Suspense>
  )
}

export default Planets
