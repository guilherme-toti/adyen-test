import { getCityCode } from '../lib/cities'

import { Tickets } from './models/tickets'

const BASE_URL = 'https://api.skypicker.com/'

export const flights = ({ departureCode, city }) => {
  const cityCode = getCityCode(city)

  return fetch(`${BASE_URL}flights?flyFrom=${departureCode}&to=${cityCode}&partner=picky`)
    .then(res => res.json())
    .then(res => Tickets(res))
    .catch(() => ({}))
}
