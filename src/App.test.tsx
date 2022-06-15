import React from 'react'
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import App from './App'
import { createMemoryHistory } from 'history'

describe('<App />', () => {
  test('renders App', async () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    )
    const element = await screen.findByTestId('app')

    expect(element).toBeInTheDocument()
  })
})
