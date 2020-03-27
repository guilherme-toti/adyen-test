import { getCityKey } from '../lib/cities'

import { Conditions, Forecast } from './models/weather'

const API_KEY = 'hWIKuLs88HFcXk6ehT6THGCXYNwFEDO7'
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
