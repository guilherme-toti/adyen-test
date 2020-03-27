import React from 'react';
import { useHistory } from "react-router-dom"

import { useAppContext } from '../contexts/AppContext'

import Logo from '../components/Logo'
import Weather from '../components/Weather'
import Tickets from '../components/Tickets'
import Select from '../components/Select'
import Input from '../components/Input'

const Result = ({
  match: {
    params: {
      city
    }
  },
}) => {
  const { departureCode } = useAppContext()
  let history = useHistory()

  if (!departureCode) {
    history.push('/')
  }

  return departureCode ? (
    <div className="h-screen">
      <Logo />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl mb-10 uppercase font-avenir-bold animated fadeInDown slow">{city}</h1>
        <div className="grid grold-cols-1 md:grid-cols-2 gap-12">
          <Weather city={city} />
          <Tickets city={city} />
        </div>
        <div className="mb-8 animated fadeInLeft delay-1s">
          <p className="mt-24 text-xl text-center mb-4">Want to try another place?</p>
          <div className="grid grold-cols-1 md:grid-cols-2 gap-12">
            <div className="w-64">
              <Input />
            </div>
            <div className="w-64">
              <Select defaultValue={city} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Result;
