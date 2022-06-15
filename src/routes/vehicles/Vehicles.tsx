import React, { FC, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SectionContext } from '../../contexts/sectionContext'
import { isFilterType, isGenericResponseData, isVehiclesCollection } from '../../utils/typeguards'
import { filterContentByStrategy, getVehicleType } from '../../utils/filters'
import { Vehicle } from './Vehicles.types'

const Pagination = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Pagination }))
)

const Vehicles: FC = () => {
  const { activeSection, contentSection } = useContext(SectionContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const [vehicles, setVehicles] = useState<Vehicle[] | null>(null)
  const [page, setPage] = useState<string>('1')

  useEffect(() => {
    setSearchParams({ page: `${page}` })
  }, [page])

  useEffect(() => {
    if (isGenericResponseData(contentSection) && isVehiclesCollection(contentSection?.results)) {
      const { results } = contentSection
      let updatedResults = [...results]
      if (searchParams.get('filter') === 'true' && isFilterType(activeSection)) {
        const filteredResults = filterContentByStrategy(updatedResults, activeSection)
        if (isVehiclesCollection(filteredResults)) {
          updatedResults = filteredResults
        }
      }
      setVehicles(updatedResults)
    }
  }, [contentSection, searchParams])

  return (
    <>
      <h2>Collection: {activeSection}</h2>
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
                  <li>class: {vehicle_class}</li>
                  <li>type: {getVehicleType(max_atmosphering_speed)}</li>
                  <li>max atmosphering speed: {max_atmosphering_speed}</li>
                  <li>manufacturer: {manufacturer}</li>
                  <li>length: {length}</li>

                  <li>cost in credits: {cost_in_credits}</li>
                  <li>cargo capacity: {cargo_capacity}</li>
                  <li>passengers: {passengers}</li>
                </ul>
              </article>
            )
          }
        )}
      </section>
      {isGenericResponseData(contentSection) && contentSection?.count > 10 && (
        <Pagination items={contentSection.count} page={page} setPage={setPage} />
      )}
    </>
  )
}

export default Vehicles
