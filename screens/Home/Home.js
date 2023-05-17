import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	RefreshControl,
} from 'react-native'
import React from 'react'

import { useAPI } from '../../contexts/MyContext'
import styles from './Home.style'

const Home = () => {
	const { data, error, loading } = useAPI()
	const [refreshing, setRefreshing] = React.useState(false)
	console.log(data)
	const onRefresh = React.useCallback(() => {
		setRefreshing(true)
		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				<Text>Pull down to see RefreshControl indicator</Text>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Home
