import { useState, useEffect } from 'react'

const useApi = (city, request) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    request(city)
      .then(res => {
        setData(res)
        setLoading(false)
      })
  }, [city, request])

  return [data, loading]
}

export default useApi
