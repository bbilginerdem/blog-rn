import { useEffect, useState } from 'react'

const useFetch = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(1)

  const fetchData = async () => {
		try {
			const response = await fetch(
				`https://www.lenasoftware.com/api/v1/en/maestro/1?page=${page}&count=10`,
			)
			const result = await response.json()

			setData((prevData) => [...prevData, ...result.result])
		} catch (error) {
			setError(error)
			setIsError(true)
		} finally {
			setLoading(false)
		}
  }

  useEffect(() => {
		fetchData()
  }, [page])

  const handleLoadMore = () => {
		if (!loading && !error) {
			setPage((prevPage) => prevPage + 1)
		}
  }

  return { data, loading, error, fetchData, handleLoadMore }
}

export default useFetch
