import React, { FC, ReactNode, Suspense, useContext, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { SectionContext } from '../../contexts/sectionContext'
import { useFetch, useWindowSize } from '../../hooks'
import { getApiDomain, getApiPath } from '../../utils/query'
import { isGenericResponseData, isGenericCollection, isValidSection } from '../../utils/typeguards'
import Unauthorized from '../unauthorized/Unauthorized'

const Navigation = React.lazy(() =>
  import('../').then((module) => ({ default: module.Navigation }))
)
const Space = React.lazy(() => import('../').then((module) => ({ default: module.Space })))
const RecourceState = React.lazy(() =>
  import('../').then((module) => ({ default: module.ResourceState }))
)

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const minViewport = 1024
  const { pathname } = useLocation()
  const {
    apiDomain,
    activeSection,
    contentSection,
    setActiveSection,
    setContentSection,
    setApiDomain
  } = useContext(SectionContext)
  const [searchParams] = useSearchParams()
  const { width: viewportWidth } = useWindowSize()
  const { data, error, type } = useFetch(getApiPath(apiDomain, pathname, searchParams))

  useEffect(() => {
    const apiDomainUrl = getApiDomain()
    if (apiDomainUrl !== apiDomain) {
      setApiDomain(apiDomainUrl)
    }
  }, [])

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
    <>
      <Navigation />
      <Space />
      <Suspense>
        {type === 'error' || type === 'loading' ? (
          <RecourceState type={type} resourceName={pathname.slice(1)} error={error} />
        ) : (
          <>{viewportWidth < minViewport ? <Unauthorized minViewport={minViewport} /> : children}</>
        )}
      </Suspense>
    </>
  )
}

export default Layout
