import React, { FC, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SectionContext } from '../../contexts/sectionContext'
import { isFilterType, isGenericResponseData, isStarshipsCollection } from '../../utils/typeguards'
import { filterContentByStrategy } from '../../utils/filters'
import { Starship } from './Starships.types'

const Filter = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Filter }))
)

const Pagination = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Pagination }))
)

const Starships: FC = () => {
  const { activeSection, contentSection } = useContext(SectionContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const [starships, setStarships] = useState<Starship[] | null>(null)
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
    if (isGenericResponseData(contentSection) && isStarshipsCollection(contentSection?.results)) {
      const { results } = contentSection
      let updatedResults = [...results]
      if (searchParams.get('filter') === 'true' && isFilterType(activeSection)) {
        const filteredResults = filterContentByStrategy(updatedResults, activeSection)
        if (isStarshipsCollection(filteredResults)) {
          updatedResults = filteredResults
        }
      }
      setStarships(updatedResults)
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
                  <li>class: {starship_class}</li>
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

export default Starships
