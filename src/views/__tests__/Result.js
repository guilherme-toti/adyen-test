import React from 'react'
import { shallow } from 'enzyme'

import Result from '../Result'

describe('Views -> Result', () => {
  const city = 'madrid'
  const props = {
    match: {
      params: {
        city
      }
    }
  }

  it('renders', () => {
    shallow(<Result {...props} />)
  })

  it('has a valid header', () => {
    const wrapper = shallow(<Result {...props} />)

    expect(wrapper.find('h1').html()).toContain(city)
  })
})
