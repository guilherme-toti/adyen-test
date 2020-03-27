import React from 'react'
import {
  HashRouter as Router,
} from "react-router-dom"
import { render } from '@testing-library/react'

import { AppContextProvider } from '../../contexts/AppContext'
import Home from '../Home'

describe('Views -> Home', () => {
  it('renders', () => {
    render(
      <AppContextProvider>
        <Router>
          <Home />
        </Router>
      </AppContextProvider>
    )
  })

  it('has a valid h1', () => {
    const { getByText } = render(
      <AppContextProvider>
        <Router>
          <Home />
        </Router>
      </AppContextProvider>
    )

    expect(getByText('Around the World')).toBeInTheDocument()
  })
})
