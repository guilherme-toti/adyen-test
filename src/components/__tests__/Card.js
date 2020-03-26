import React from 'react'
import { shallow } from 'enzyme'
import Card from '../Card'

import bgImage from '../../assets/images/airplane-unsplash.jpg'

describe('<Card /> component', () => {
  it('shows the title', () => {
    const title = 'My Title'
    const childrenComponent = <p>Hello!</p>
    const wrapper = shallow(
      <Card title={title} bgImage={bgImage}>
        {childrenComponent}
      </Card>
    )

    expect(wrapper.find('.card-title').html()).toContain(title)
    expect(wrapper.find('img').prop('src')).toEqual(bgImage)
    expect(wrapper).toContainReact(childrenComponent)
  })
})
