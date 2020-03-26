import React from 'react';

import useApi from '../api/useApi'
import { flights } from '../api/tickets'

import Card from './Card'

import TicketsLoadingIcon from '../assets/images/tickets-loading.svg'
import AirplaneImage from '../assets/images/airplane-unsplash.jpg'

const Tickets = ({ city }) => {
  const [data, loading] = useApi(city, flights)

  return (
    <Card title="Tickets" bgImage={AirplaneImage}>
      {loading ? (
        <div>
          <img className="m-auto" src={TicketsLoadingIcon} alt="Loading" />
          <p className="text-xl">Haggling the lowest price...</p>
        </div>
      ) : (
        <div className="flex items-center flex-col justify-center animated fadeIn">
          <p className="flex-grow text-3xl mb-4">{data.currency} {data.minPrice}</p>
          <p className="text-xl mb-2">Total duration is {data.flyDuration}</p>
          <p className="text-xl mb-10">Total distance is {data.distance}km</p>
          <a
            className="bg-blue-500 hover:bg-blue-700 uppercase text-sm text-white py-4 px-6 rounded"
            href={data.deepLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy this ticket
          </a>
        </div>
      )}
    </Card>
  )
}

export default Tickets
