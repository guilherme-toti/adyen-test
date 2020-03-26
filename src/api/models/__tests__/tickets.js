import { Tickets } from '../tickets'

describe('Tickets model', () => {
  it('returns the expected value', () => {
    const currency = 'EUR'
    const minPrice = 148
    const flyDuration = '3h 6m'
    const distance = 300
    const deepLink = 'some-deep-link-3'

    const dataFromApi = {
      "data": [
        {
          "fly_duration": "1h 4m",
          "distance": 100,
          "price": 200,
          "deep_link": "some-deep-link-1"
        },
        {
          "fly_duration": "2h 5m",
          "distance": 200,
          "price": 150,
          "deep_link": "some-deep-link-2"
        },
        {
          "fly_duration": flyDuration,
          "distance": distance,
          "price": minPrice,
          "deep_link": deepLink
        },
      ],
      currency,
    }

    const expectedValue = {
      currency,
      minPrice,
      flyDuration,
      distance,
      deepLink,
    }

    expect(Tickets(dataFromApi)).toEqual(expectedValue)
  })
})
