import React, { FC, Suspense, useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import { isGenericResponseData, isStarshipsCollection } from '../../utils/typeguards'
import { getPageParam } from '../../utils/query'
import { Starship } from './Starships.types'

const Loading = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Loading }))
)
const ApiError = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.ApiError }))
)

const Pagination = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Pagination }))
)

const Starships: FC = () => {
  const section = 'starships'
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const [starships, setStarships] = useState<Starship[] | null>(null)
  const [page, setPage] = useState('')

  const { data, error } = useFetch(`api/${pathname}${getPageParam(page)}`)

  useEffect(() => {
    if (isGenericResponseData(data) && isStarshipsCollection(data?.results)) {
      const { results } = data
      setStarships(results)
    }
  }, [data, searchParams])

  useEffect(() => {
    if (parseInt(page) > 1) {
      searchParams.set('page', `${page}`)
    }
  }, [page])

  return (
    <Suspense fallback={<Loading />}>
      {error ? (
        <ApiError error={error} />
      ) : (
        <>
          <h2>Collection: {section}</h2>
          <section className='grid'>
            {starships?.map(
              ({
                cargo_capacity,
                cost_in_credits,
                hyperdrive_rating,
                length,
                manufacturer,
                max_atmosphering_speed,
                model,
                name,
                starship_class
              }) => {
                const key = name.toLowerCase()
                return (
                  <article key={key}>
                    <h3>{name}</h3>
                    <ul>
                      <li>model: {model}</li>
                      <li>starship class: {starship_class}</li>
                      <li>manufacturer: {manufacturer}</li>
                      <li>length: {length}</li>
                      <li>hyperdrive rating: {hyperdrive_rating}</li>
                      <li>max atmosphering speed: {max_atmosphering_speed}</li>
                      <li>cost in credits: {cost_in_credits}</li>
                      <li>cargo capacity: {cargo_capacity}</li>
                    </ul>
                  </article>
                )
              }
            )}
          </section>
          {isGenericResponseData(data) && data?.count > 10 && (
            <Pagination items={data.count} setPage={setPage} />
          )}
        </>
      )}
    </Suspense>
  )
}

export default Starships
