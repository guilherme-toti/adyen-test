import React from 'react'
import { shallow } from 'enzyme'

import Home from '../Home'

describe('Views -> Home', () => {
  it('renders', () => {
    shallow(<Home />)
  })

  it('has a valid h1', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper.find('h1').html()).toContain('Around the World')
  })
})
