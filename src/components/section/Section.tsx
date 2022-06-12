import React, { FC, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext'
import { SectionProps } from './Section.types'

const Pagination = React.lazy(() => import('../').then(module => ({ default: module.Pagination })));

const Section:FC<SectionProps> = ({content}) => {
  const { activeSection, contentSection } = useContext(SectionContext)
  return (
    <>
    I selected collection: {activeSection}. and I will show max 10 results
    {contentSection && contentSection?.count > 10 && <Pagination />}
    </>
  )
}

export default Section