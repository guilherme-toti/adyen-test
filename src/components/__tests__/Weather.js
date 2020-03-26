import React from 'react'
import { mount } from 'enzyme'

import Weather from '../Weather'

describe('<Weather /> component', () => {
  let useEffect;
  const city = 'madrid'
  const setState = jest.fn()

  it('renders', () => {
    jest.spyOn(React, 'useState')
      .mockImplementation(init => [init, setState])
    useEffect = jest.spyOn(React, "useEffect")
      .mockImplementationOnce(f => f());

    mount(<Weather city={city} />)
  })
})
