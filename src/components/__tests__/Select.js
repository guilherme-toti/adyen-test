import React from 'react'
import { render } from '@testing-library/react'
import routeData from 'react-router'

import Select from '../Select'
import { AppContextProvider } from '../../contexts/AppContext'

describe('<Select /> component', () => {
  beforeEach(() => {
    const mockHistory = {
      pathname: '/'
    };
    jest.spyOn(routeData, 'useHistory').mockReturnValue(mockHistory);
  });

  it('has 4 options inside', () => {
    const { getAllByRole } = render(
      <AppContextProvider>
        <Select />
      </AppContextProvider>
    )
    expect(getAllByRole('option').length).toEqual(4)
  })
})
