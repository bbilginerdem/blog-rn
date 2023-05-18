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
	const { data: _data, error, loading, fetchData, handleLoadMore } = useAPI()
	const [isRefreshing, setIsRefreshing] = useState(false)
  
	const data = _data || []

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

	const renderFooter = () => {
		if (loading) {
			return (
				<View style={styles.loaderContainer}>
					<ActivityIndicator size="small" color="gray" />
				</View>
			)
		}

		return null
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
		return <Text>Error occurred.</Text>
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
				onEndReached={handleLoadMore}
				onEndReachedThreshold={0.5}
				ListFooterComponent={renderFooter}
			/>
		</SafeAreaView>
	)
}

export default Home
