import { getCityCode } from '../lib/cities'

import { Tickets } from './models/tickets'

const BASE_URL = 'https://api.skypicker.com/'

export const flights = city => {
  const cityCode = getCityCode(city)

  return fetch(`${BASE_URL}flights?flyFrom=AMS&to=${cityCode}&partner=picky`)
    .then(res => res.json())
    .then(res => Tickets(res))
}
