import React, { FC, ReactNode, Suspense, useContext, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { SectionContext } from '../../contexts/sectionContext'
import { useFetch } from '../../hooks'
import { getPageParam } from '../../utils/query'
import { isGenericResponseData, isGenericCollection, isValidSection } from '../../utils/typeguards'

const Navigation = React.lazy(() =>
  import('../').then((module) => ({ default: module.Navigation }))
)
const Space = React.lazy(() => import('../').then((module) => ({ default: module.Space })))
const Loading = React.lazy(() => import('../').then((module) => ({ default: module.Loading })))
const ApiError = React.lazy(() => import('../').then((module) => ({ default: module.ApiError })))

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation()
  const { activeSection, contentSection, setActiveSection, setContentSection } =
    useContext(SectionContext)
  const [searchParams] = useSearchParams()
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
    <Suspense fallback={<Loading />}>
      {error ? (
        <ApiError error={error} />
      ) : (
        <>
          <Navigation />
          <Space />
          {children}
        </>
      )}
    </Suspense>
  )
}

export default Layout
