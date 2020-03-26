import React from 'react'
import { mount } from 'enzyme'
import routeData from 'react-router'

import Select from '../Select'

describe('<Select /> component', () => {
  beforeEach(() => {
    const mockHistory = {
      pathname: '/'
    };
    jest.spyOn(routeData, 'useHistory').mockReturnValue(mockHistory);
  });

  it('has 4 options inside', () => {
    const wrapper = mount(<Select />)

    expect(wrapper.find('option').length).toBe(4)
  })
})
