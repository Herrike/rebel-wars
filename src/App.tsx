import React, { Suspense } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

const Loading = React.lazy(() =>
  import('./components').then((module) => ({ default: module.Loading }))
)

const Layout = React.lazy(() =>
  import('./components').then((module) => ({ default: module.Layout }))
)

const App = () => {
  return (
    <div className='App' data-testid='app'>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Outlet />
        </Layout>
      </Suspense>
    </div>
  )
}

export default App
