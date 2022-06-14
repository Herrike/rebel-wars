import React, { Suspense, useEffect, useState } from 'react'
import './App.css'
import { SectionContext } from './contexts/sectionContext'
import { LangType, SectionType } from './contexts/sectionContext.types'
import useFetch from './hooks/useFetch'
import { isGenericResponseData } from './utils/typeguards'
import { GenericResponseData } from './utils/typeguards.types'

const Navigation = React.lazy(() =>
  import('./components').then((module) => ({ default: module.Navigation })),
)
const Loading = React.lazy(() =>
  import('./components').then((module) => ({ default: module.Loading })),
)
const ApiError = React.lazy(() =>
  import('./components').then((module) => ({ default: module.ApiError })),
)
const Section = React.lazy(() =>
  import('./components').then((module) => ({ default: module.Section })),
)
const Space = React.lazy(() => import('./components').then((module) => ({ default: module.Space })))

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('planets')
  const [querySection, setQuerySection] = useState('api/planets')
  const [contentSection, setContentSection] = useState<GenericResponseData | null>(null)
  const [activeLang, setActiveLang] = useState<LangType>('')
  const [apiError, setApiError] = useState<Error | undefined>()

  const { data, error } = useFetch(querySection)

  useEffect(() => {
    if (isGenericResponseData(data)) {
      setContentSection(data)
    } else if (error) {
      setApiError(error)
    }
  }, [data, error])

  return (
    <div className='App' data-testid='app'>
      <SectionContext.Provider
        value={{
          activeSection,
          querySection,
          contentSection,
          activeLang,
          setActiveSection,
          setQuerySection,
          setContentSection,
          setActiveLang,
        }}
      >
        <Navigation />
        <Space />
        <Suspense fallback={<Loading />}>
          {apiError || contentSection === null ? <ApiError error={apiError} /> : <Section />}
        </Suspense>
      </SectionContext.Provider>
    </div>
  )
}

export default App
