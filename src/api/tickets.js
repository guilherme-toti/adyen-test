import { getCityCode } from '../lib/cities'

import { Tickets } from './models/tickets'

const FLY_FROM = 'AMS'
const BASE_URL = 'https://api.skypicker.com/'

export const flights = city => {
  const cityCode = getCityCode(city)

  return fetch(`${BASE_URL}flights?flyFrom=${FLY_FROM}&to=${cityCode}&partner=picky`)
    .then(res => res.json())
    .then(res => Tickets(res))
}
