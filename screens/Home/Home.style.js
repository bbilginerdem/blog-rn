import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const imageWidth = width * 0.8 // 80% of the screen width
const imageHeight = height * 0.2 // Adjust height based on image's aspect ratio

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	image: { width: imageWidth, height: imageHeight },
	title: {
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 45,
		paddingRight: 45,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	summary: {
		paddingLeft: 45,
		paddingRight: 45,
	},
	readingTime: {
		paddingTop: 8,
		paddingBottom: 30,
		paddingLeft: 45,
		paddingRight: 45,
	},
	activityIndicator: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	loaderContainer: {
		paddingVertical: 20,
	},
})
