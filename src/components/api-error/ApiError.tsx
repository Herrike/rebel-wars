import React, { FC, useContext } from 'react'
import { SectionContext } from '../../contexts/sectionContext'

const ApiError: FC<{ error?: Error }> = ({
  error = new Error('Error: Unable to fetch resource'),
}) => {
  const { activeSection } = useContext(SectionContext)

  return (
    <div data-testid={`api-error-${activeSection.toLowerCase()}`}>
      Api Error for {activeSection}, {error?.message}
    </div>
  )
}

export default ApiError
