import React from 'react'
import { mount } from 'enzyme'
import { act } from "react-dom/test-utils";

import useApi from '../../api/useApi'
import Weather from '../Weather'

jest.mock('../../api/useApi')

const fakeData = {
  conditions: {
    text: 'Cloudy',
    temperature: {
      unit: 'F',
      value: 10
    }
  },
  forecast: {
    averageTemperature: {
      min: {
        value: 20,
        unit: 'F'
      },
      max: {
        value: 40,
        unit: 'F'
      }
    },
  }
}

describe('<Weather /> component', () => {
  const city = 'madrid'

  afterEach(() => {
    useApi.mockRestore();
  });

  it('mounts as loading state', async () => {
    useApi.mockImplementation(() => ([
      {}, true
    ]))

    const wrapper = mount(<Weather city={city} />)

    expect(wrapper.find('p').html()).toContain('Waiting')
  })

  it('renders card correctly after loading', async () => {
    useApi.mockImplementation(() => ([
      fakeData, false
    ]))

    let wrapper;

    await act(async () => {
      wrapper = mount(<Weather city={city} />)
    });

    expect(wrapper.find('.card-title').html()).toContain('Weather')
    expect(wrapper.find('p').length).toEqual(5)
  })
})
