import React, { FC, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SectionContext } from '../../contexts/sectionContext'
import {
  isFilterType,
  isGenericCollection,
  isGenericResponseData,
  isSpeciesCollection
} from '../../utils/typeguards'
import { filterContentByStrategy, getCommissionerNameBySection } from '../../utils/filters'
import { Specie } from './Species.types'

const Filter = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Filter }))
)

const Pagination = React.lazy(() =>
  import('../../components').then((module) => ({ default: module.Pagination }))
)

const Species: FC = () => {
  const { activeSection, contentSection } = useContext(SectionContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const [species, setSpecies] = useState<Specie[] | null>(null)
  const [activeFilter, setActiveFilter] = useState<boolean>(false)
  const [page, setPage] = useState('1')

  useEffect(() => {
    const filter = `${activeFilter}`
    if (activeFilter === true) {
      setSearchParams({ page: `${page}`, filter })
    } else {
      setSearchParams({ page: `${page}` })
    }
  }, [activeFilter, page])

  useEffect(() => {
    if (isGenericResponseData(contentSection) && isGenericCollection(contentSection?.results)) {
      const updatedResults = [...contentSection.results]
      if (searchParams.get('filter') === 'true' && isFilterType(activeSection)) {
        const filteredResults = filterContentByStrategy(updatedResults, activeSection)
        if (filteredResults.length && isSpeciesCollection(filteredResults)) {
          setSpecies(filteredResults)
        } else {
          setSpecies([])
        }
      } else if (isSpeciesCollection(updatedResults)) {
        setSpecies(updatedResults)
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
        {!species?.length && activeFilter && (
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

export default Species
