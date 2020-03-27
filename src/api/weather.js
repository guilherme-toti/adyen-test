import { getCityKey } from '../lib/cities'

import { Conditions, Forecast } from './models/weather'

// Usually I put it on ENV file or on the build env
// In this case this is here because it's hosted at GitHub Pages
// So it won't matter
const API_KEY = 'ZAHnEkI9F4Vprf4gvGeYrCYWAvHRBeJS'
const BASE_URL = 'https://dataservice.accuweather.com/'

const currentConditions = city => {
  const cityKey = getCityKey(city)

  return fetch(`${BASE_URL}currentconditions/v1/${cityKey}?apikey=${API_KEY}`)
    .then(res => res.json())
    .then(res => Conditions(res[0]))
}

const forecast5Days = city => {
  const cityKey = getCityKey(city)

  return fetch(`${BASE_URL}forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`)
    .then(res => res.json())
    .then(res => Forecast(res))
}

const getWeather = ({ city }) => {
  return Promise.all([
    currentConditions(city),
    forecast5Days(city)
  ])
    .then(([conditions, forecast]) => ({ conditions, forecast }))
}


export default getWeather
