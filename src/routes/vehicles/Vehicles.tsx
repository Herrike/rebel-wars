import React, { FC, Suspense, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import { isGenericResponseData, isVehiclesCollection } from '../../utils/typeguards'
import { Vehicle } from './Vehicles.types'

const Loading = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Loading }))
)
const ApiError = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.ApiError }))
)

const Vehicles: FC = () => {
  const { pathname } = useLocation()
  const [vehicles, setVehicles] = useState<Vehicle[] | null>(null)
  const [page, setPage] = useState<string>('')

  const { data, error } = useFetch(`api/${pathname}${page}`)

  useEffect(() => {
    if (isGenericResponseData(data) && isVehiclesCollection(data?.results)) {
      const { results } = data
      setVehicles(results)
    }
  }, [data, vehicles])

  useEffect(() => {
    const parsedPage = parseInt(page)
    if (Number.isInteger(parsedPage) && parsedPage > 1) {
      setPage(page)
    }
  }, [page])

  return (
    <Suspense fallback={<Loading />}>
      {error ? (
        <ApiError error={error} />
      ) : (
        <>
          <section className='grid'>
            {vehicles?.map(
              ({
                name,
                vehicle_class,
                model,
                max_atmosphering_speed,
                manufacturer,
                length,
                cost_in_credits,
                cargo_capacity,
                passengers
              }) => {
                const key = name.toLowerCase()
                return (
                  <article key={key}>
                    <h3>{name}</h3>
                    <ul>
                      <li>model: {model}</li>
                      <li>vehicle class: {vehicle_class}</li>
                      <li>manufacturer: {manufacturer}</li>
                      <li>length: {length}</li>
                      <li>max atmosphering speed: {max_atmosphering_speed}</li>
                      <li>cost in credits: {cost_in_credits}</li>
                      <li>cargo capacity: {cargo_capacity}</li>
                      <li>passengers: {passengers}</li>
                    </ul>
                  </article>
                )
              }
            )}
          </section>
        </>
      )}
    </Suspense>
  )
}

export default Vehicles
