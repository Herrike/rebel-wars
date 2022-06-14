import React, { FC, useContext, useEffect, useState } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { isGenericResponseData, isSpeciesCollection } from '../../utils/typeguards'
import { Specie } from './Species.types'

const Species: FC = () => {
  const [species, setSpecies] = useState<Specie[] | null>(null)
  const { contentSection } = useContext(SectionContext)
  useEffect(() => {
    if (isGenericResponseData(contentSection) && isSpeciesCollection(contentSection?.results)) {
      setSpecies(contentSection.results)
    }
  }, [contentSection, species])

  return (
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
  )
}

export default Species
