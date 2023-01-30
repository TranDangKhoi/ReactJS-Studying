import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
export default function useHackerNewsAPI(initialUrl, initialData) {
  const [query, setQuery] = useState('react')
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  const handleFetchData = useRef({})
  const isMounted = useRef(true)
  const [url, setUrl] = useState(initialUrl)
  useEffect(() => {
    isMounted.current = true
    return () => {
      // unmounted component
      isMounted.current = false
    }
  }, [])
  handleFetchData.current = async () => {
    setLoading(true)
    try {
      const response = await axios.get(url)
      if (isMounted.current) {
        setData(response.data || [])
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
      setErrorMsg(`Oops! Something went wrong please try again later ${err}`)
    }
  }
  useEffect(() => {
    handleFetchData.current()
  }, [url])
  return {
    query,
    setQuery,
    data,
    setUrl,
    loading,
    errorMsg
  }
}
