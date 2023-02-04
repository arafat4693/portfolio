import { useState, useEffect } from "react"
import axios from "axios"

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<string>("")

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const res = await axios.get<T>(url)
        setData(res.data)
      } catch (err: any) {
        const message =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString()
        setIsError(message)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  async function reFetch(newUrl: string) {
    setIsLoading(true)
    try {
      const res = await axios.get<T>(newUrl)
      setData(res.data)
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      setIsError(message)
    }
    setIsLoading(false)
  }

  return { data, isLoading, isError, reFetch }
}
