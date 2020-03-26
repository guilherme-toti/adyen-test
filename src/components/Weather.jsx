import React from 'react';

import useApi from '../api/useApi'
import getWeather from '../api/weather'

import Card from './Card'

import WeatherLoadingIcon from '../assets/images/weather-loading.svg'
import CloudsImage from '../assets/images/clouds-unsplash.jpg'

const Weather = ({ city }) => {
  const [data, loading] = useApi(city, getWeather)

  return (
    <Card title="Weather" bgImage={CloudsImage}>
      {loading ? (
        <div>
          <img className="m-auto" src={WeatherLoadingIcon} alt="Loading" />
          <p className="text-xl">Waiting Thor's response...</p>
        </div>
      ) : (
        <div className="animated fadeIn flex items-center flex-col justify-center">
          <p className="flex-grow text-3xl mb-4">{data.conditions.text}</p>
          <p className="text-xl mb-2">Now is {data.conditions.temperature.value}°{data.conditions.temperature.unit}</p>
          <p className="font-avenir-bold text-sm uppercase mt-8 mb-2">Next 5 days average</p>
          <p className="text-xl mb-2">Min {data.forecast.averageTemperature.min.value}°{data.forecast.averageTemperature.min.unit}</p>
          <p className="text-xl">Max {data.forecast.averageTemperature.max.value}°{data.forecast.averageTemperature.max.unit}</p>
        </div>
      )}
    </Card>
  )
}

export default Weather
