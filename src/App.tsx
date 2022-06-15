import React, { FC, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { SectionContext } from './contexts/sectionContext'
import { SectionType } from './contexts/sectionContext.types'
import { GenericResponseData } from './utils/typeguards.types'

const Layout = React.lazy(() =>
  import('./components').then((module) => ({ default: module.Layout }))
)

const App: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('')
  const [contentSection, setContentSection] = useState<GenericResponseData | null>(null)

  return (
    <div className='App' data-testid='app'>
      <SectionContext.Provider
        value={{ activeSection, contentSection, setActiveSection, setContentSection }}
      >
        <Layout>
          <Outlet />
        </Layout>
      </SectionContext.Provider>
    </div>
  )
}

export default App
