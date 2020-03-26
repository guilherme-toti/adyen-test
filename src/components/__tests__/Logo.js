import React from 'react'
import { shallow } from 'enzyme'
import Logo from '../Logo'

describe('<Logo /> component', () => {
  it('shows the title', () => {
    const wrapper = shallow(<Logo />)

    expect(wrapper.find('h1').html()).toContain('WAW')
  })
})
