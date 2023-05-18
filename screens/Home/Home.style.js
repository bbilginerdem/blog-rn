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
	imageContainer: { justifyContent: 'center', alignItems: 'center' },
	image: { width: imageWidth, height: imageHeight },
	activityIndicator: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	loaderContainer: {
		paddingVertical: 20,
	},
})
