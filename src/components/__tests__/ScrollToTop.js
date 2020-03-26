import React from 'react'
import { shallow } from 'enzyme'
import routeData from 'react-router'

import ScrollToTop from '../ScrollToTop'

describe('<ScrollToTop /> component', () => {
  beforeEach(() => {
    const mockLocation = {
      pathname: '/'
    };
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
  });

  it('renders', () => {
    shallow(<ScrollToTop />)
  })
})
