import { createContext, useContext } from 'react'
import useFetch from '../hooks/useFetch'

const APIContext = createContext()

function APIContextProvider({ children }) {
	const { data, error, loading } = useFetch()

	return (
		<APIContext.Provider value={{ data, error, loading }}>
			{children}
		</APIContext.Provider>
	)
}

export default APIContextProvider

export function useAPI() {
	const context = useContext(APIContext)
	if (context === undefined) {
		throw new Error('Context must be used within a Provider')
	}
	return context
}
