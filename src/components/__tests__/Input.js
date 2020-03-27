import React from 'react'
import { render } from '@testing-library/react'

import Input from '../Input'
import { AppContextProvider } from '../../contexts/AppContext'

describe('<Input /> component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <AppContextProvider>
        <Input />
      </AppContextProvider>
    )
    expect(getByPlaceholderText('e.g: Sao Paulo')).toBeInTheDocument()
  })
})
