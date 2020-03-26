import React from 'react'
import { mount } from 'enzyme'

import Tickets from '../Tickets'

describe('<Tickets /> component', () => {
  let useEffect;
  const city = 'madrid'
  const setState = jest.fn()

  it('renders', () => {
    jest.spyOn(React, 'useState')
      .mockImplementation(init => [init, setState])
    useEffect = jest.spyOn(React, "useEffect")
      .mockImplementationOnce(f => f());

    mount(<Tickets city={city} />)
  })
})
