import { useState, useEffect } from 'react'

const useApi = (departureCode, city, request) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    request({ departureCode, city })
      .then(res => {
        setData(res)
        setLoading(false)
      })
  }, [departureCode, city, request])

  return [data, loading]
}

export default useApi
