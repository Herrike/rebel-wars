import React, { FC, Suspense, useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import { filterContentByStrategy } from '../../utils/filters'
import { isGenericResponseData, isSpeciesCollection } from '../../utils/typeguards'
import { getPageParam } from '../../utils/query'
import { Specie } from './Species.types'

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

const Species: FC = () => {
  const section = 'species'
  const { pathname } = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [species, setSpecies] = useState<Specie[] | null>(null)
  const [activeFilter, setActiveFilter] = useState<boolean>(false)
  const [page, setPage] = useState('1')

  const { data, error } = useFetch(`api/${pathname}${getPageParam(page)}`)

  useEffect(() => {
    if (isGenericResponseData(data) && isSpeciesCollection(data?.results)) {
      const { results } = data
      let updatedResults = [...results]
      if (searchParams.get('filter') === 'true') {
        const filteredResults = filterContentByStrategy(updatedResults, section)
        if (isSpeciesCollection(filteredResults)) {
          updatedResults = filteredResults
        }
      }
      setSpecies(updatedResults)
    }
  }, [data, searchParams])

  useEffect(() => {
    const filter = `${activeFilter}`
    if (activeFilter === true) {
      setSearchParams({ page: `${page}`, filter })
    } else {
      setSearchParams({ page: `${page}` })
    }
  }, [activeFilter, page])

  return (
    <Suspense fallback={<Loading />}>
      {error ? (
        <ApiError error={error} />
      ) : (
        <>
          <Filter section={section} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <h2>Collection: {section}</h2>
          <section className='grid'>
            {species?.map(({ name, classification, designation, language }) => {
              const key = name.toLowerCase()
              return (
                <article key={key}>
                  <h3>{name}</h3>
                  <ul>
                    <li>classification: {classification}</li>
                    <li>designation: {designation}</li>
                    <li>language: {language}</li>
                  </ul>
                </article>
              )
            })}
          </section>
          {isGenericResponseData(data) && data?.count > 10 && activeFilter === false && (
            <Pagination items={data.count} setPage={setPage} />
          )}
        </>
      )}
    </Suspense>
  )
}

export default Species
