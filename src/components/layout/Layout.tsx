import React, { FC, ReactNode } from 'react'

const Navigation = React.lazy(() =>
  import('../').then((module) => ({ default: module.Navigation }))
)
const Space = React.lazy(() => import('../').then((module) => ({ default: module.Space })))

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Space />
      {children}
    </>
  )
}

export default Layout
