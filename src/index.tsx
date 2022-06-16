import 'floc-off'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const Home = React.lazy(() => import('./routes').then((module) => ({ default: module.Home })))
const Planets = React.lazy(() => import('./routes').then((module) => ({ default: module.Planets })))
const Species = React.lazy(() => import('./routes').then((module) => ({ default: module.Species })))
const Vehicles = React.lazy(() =>
  import('./routes').then((module) => ({ default: module.Vehicles }))
)
const Starships = React.lazy(() =>
  import('./routes').then((module) => ({ default: module.Starships }))
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='planets' element={<Planets />} />
          <Route path='species' element={<Species />} />
          <Route path='vehicles' element={<Vehicles />} />
          <Route path='starships' element={<Starships />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
