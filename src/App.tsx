import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

const Layout = React.lazy(() =>
  import('./components').then((module) => ({ default: module.Layout }))
)
const App = () => {
  return (
    <div className='App' data-testid='app'>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  )
}

export default App
