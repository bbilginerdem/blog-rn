import { useEffect, useState } from 'react'

const useFetch = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchData = async () => {
		try {
			const response = await fetch(
				'https://www.lenasoftware.com/api/v1/en/maestro/1',
			)
			const data = await response.json()
			setData(data)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return { data, loading, error }
}

export default useFetch
