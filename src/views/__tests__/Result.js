import React from 'react'
import {
  HashRouter as Router,
} from "react-router-dom"
import { render } from '@testing-library/react'
import routeData from 'react-router'

import { AppContextProvider } from '../../contexts/AppContext'
import Result from '../Result'

describe('Views -> Result', () => {
  beforeEach(() => {
    const mockHistory = {
      push: () => {}
    };
    jest.spyOn(routeData, 'useHistory').mockReturnValue(mockHistory);
  });

  const city = 'madrid'
  const props = {
    match: {
      params: {
        city
      }
    }
  }

  it('renders', () => {
    render(
      <AppContextProvider>
        <Router>
          <Result {...props} />
        </Router>
      </AppContextProvider>
    )
  })

  it('has a valid header', () => {
    const { getByText } = render(
      <AppContextProvider>
        <Router>
          <Result {...props} />
        </Router>
      </AppContextProvider>
    )

    expect(getByText(city)).toBeInTheDocument()
  })
})
