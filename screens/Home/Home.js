import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	RefreshControl,
	FlatList,
} from 'react-native'
import React from 'react'

import { useAPI } from '../../contexts/MyContext'
import styles from './Home.style'

const Home = () => {
	const { data, error, loading } = useAPI()

	const [currentPage, setCurrentPage] = React.useState(1)
	const [refreshing, setRefreshing] = React.useState(false)

	const onRefresh = React.useCallback(() => {
		setRefreshing(true)
		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
	}, [])

	const renderData = () => {
		return data.map((item) => {
			return (
				<View key={item.id}>
					<Text>{item.title}</Text>
					<Text>{item.body}</Text>
				</View>
			)
		})
	}

	const handleScroll = () => {
		if (data.length === 0) {
			return
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				onScroll={handleScroll}
				contentContainerStyle={styles.scrollView}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={renderData}
			/>
		</SafeAreaView>
	)
}

export default Home
