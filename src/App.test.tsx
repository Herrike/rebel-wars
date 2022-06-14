import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  test('renders App', async () => {
    render(<App />)

    const element = await screen.findByTestId('app')

    expect(element).toBeInTheDocument()
  })
})
