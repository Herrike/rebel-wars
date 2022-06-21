import React, { FC, ReactNode, Suspense, useContext, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Loading } from '../'
import { SectionContext } from '../../contexts/sectionContext'
import { useFetch, useWindowSize } from '../../hooks'
import { getPageParam } from '../../utils/query'
import { isGenericResponseData, isGenericCollection, isValidSection } from '../../utils/typeguards'
import Unauthorized from '../unauthorized/Unauthorized'

const Navigation = React.lazy(() =>
  import('../').then((module) => ({ default: module.Navigation }))
)
const Space = React.lazy(() => import('../').then((module) => ({ default: module.Space })))
const ApiError = React.lazy(() => import('../').then((module) => ({ default: module.ApiError })))

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const minViewport = 1024
  const { pathname } = useLocation()
  const { activeSection, contentSection, setActiveSection, setContentSection } =
    useContext(SectionContext)
  const [searchParams] = useSearchParams()
  const { width: viewportWidth } = useWindowSize()
  const { data, error } = useFetch(`api${pathname}${getPageParam(searchParams.get('page'))}`)

  useEffect(() => {
    const currentPage = searchParams.get('page')
    if (!currentPage && activeSection !== '') {
      searchParams.set('page', '1')
    }
  }, [searchParams])

  useEffect(() => {
    if (isGenericResponseData(data) && isGenericCollection(data?.results)) {
      const section = pathname.slice(1)
      setContentSection(data)
      if (activeSection !== section && isValidSection(section)) {
        setActiveSection(section)
      }
    }
  }, [contentSection, data])

  return (
    <Suspense fallback={<Loading resourceName={activeSection} />}>
      {error ? (
        <ApiError error={error} />
      ) : (
        <>
          <Navigation />
          <Space />
          {viewportWidth < minViewport ? <Unauthorized minViewport={minViewport} /> : children}
        </>
      )}
    </Suspense>
  )
}

export default Layout
