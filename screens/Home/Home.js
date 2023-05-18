import React, { useCallback, useState } from 'react'
import {
	View,
	Text,
	SafeAreaView,
	RefreshControl,
	FlatList,
	Image,
	ActivityIndicator,
} from 'react-native'

import { useAPI } from '../../contexts/MyContext'
import styles from './Home.style'

const Home = () => {
	const { data: _data, error, loading, fetchData } = useAPI()
	const [isRefreshing, setIsRefreshing] = useState(false)

	const data = _data.result || []

	const onRefresh = useCallback(() => {
		setIsRefreshing(true)
		fetchData().then(() => setIsRefreshing(false))
	}, [])

	const renderData = ({ item }) => {
		return (
			<View style={styles.imageContainer}>
				<Image source={{ uri: item.banner }} style={styles.image} />
				<Text></Text>
			</View>
		)
	}

	if (loading) {
		return (
			<ActivityIndicator
				size="large"
				color="#608DC4"
				style={styles.activityIndicator}
			/>
		)
	}

	if (error) {
		return <Text>{error}</Text>
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				refreshControl={
					<RefreshControl
						refreshing={isRefreshing}
						onRefresh={onRefresh}
					/>
				}
				data={data}
				keyExtractor={(item) => item.postId}
				renderItem={renderData}
				scrollVelocityThreshold={1000}
				decelerationRate={0.9}
				extraScrollHeight={100}
			/>
		</SafeAreaView>
	)
}

export default Home
