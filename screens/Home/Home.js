import React, { useCallback, useState } from 'react'
import {
	View,
	Text,
	SafeAreaView,
	RefreshControl,
	FlatList,
	Image,
	ActivityIndicator,
	Pressable,
} from 'react-native'

import { useAPI } from '../../contexts/MyContext'
import styles from './Home.style'

const Home = ({ navigation }) => {
	const { data: _data, error, loading, fetchData, handleLoadMore } = useAPI()
	const [isRefreshing, setIsRefreshing] = useState(false)

	const data = _data || []

	const onRefresh = useCallback(() => {
		setIsRefreshing(true)
		fetchData().then(() => setIsRefreshing(false))
	}, [])

	const handlePress = (item) => {
		navigation.navigate('Blog', { content: item.content })
	}

	const renderData = ({ item }) => {
		return (
			<Pressable
				style={styles.cardContainer}
				onPress={() => handlePress(item)}
			>
				<Image source={{ uri: item.banner }} style={styles.image} />
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.summary}>{item.summary}</Text>
				<Text style={styles.readingTime}>
					Reading time: {item.totalReadingTime} minutes
				</Text>
			</Pressable>
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
