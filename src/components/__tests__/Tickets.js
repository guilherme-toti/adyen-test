import React from 'react'
import { mount } from 'enzyme'
import { act } from "react-dom/test-utils";

import useApi from '../../api/useApi'
import Tickets from '../Tickets'

jest.mock('../../api/useApi')

const fakeData = {
  currency: 'EUR',
  minPrice: 10,
  flyDuration: '1h 1m',
  distance: 100,
  deepLink: 'some-url',
}

describe('<Tickets /> component', () => {
  const city = 'madrid'

  afterEach(() => {
    useApi.mockRestore();
  });

  it('mounts as loading state', async () => {
    useApi.mockImplementation(() => ([
      {}, true
    ]))

    const wrapper = mount(<Tickets city={city} />)

    expect(wrapper.find('p').html()).toContain('Haggling')
  })

  it('renders card correctly after loading', async () => {
    useApi.mockImplementation(() => ([
      fakeData, false
    ]))

    let wrapper;

    await act(async () => {
      wrapper = mount(<Tickets city={city} />)
    });

    expect(wrapper.find('.card-title').html()).toContain('Tickets')
    expect(wrapper.find('p').length).toEqual(3)
    expect(wrapper.find('a').prop('href')).toEqual(fakeData.deepLink)
  })
})
