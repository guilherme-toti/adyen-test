import React from 'react';

import Logo from '../components/Logo'
import Weather from '../components/Weather'
import Tickets from '../components/Tickets'
import Select from '../components/Select'

const Result = ({
  match: {
    params: { city }
  }
}) => (
  <div className="h-screen">
    <Logo />
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl mb-10 uppercase font-avenir-bold animated fadeInDown slow">{city}</h1>
      <div className="grid grold-cols-1 md:grid-cols-2 gap-12">
        <Weather city={city} />
        <Tickets city={city} />
      </div>
      <div className="animated fadeInLeft delay-1s">
        <p className="mt-24 text-xl">Want to try another place?</p>
        <div className="w-full my-4">
          <Select defaultValue={city} />
        </div>
      </div>
    </div>
  </div>
)

export default Result;
