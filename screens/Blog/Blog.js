import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

import styles from './Blog.style'

const Blog = ({ route }) => {
	const { content } = route.params

	const injectedJavaScript = `
    var styleElement = document.createElement('style');
    styleElement.innerHTML = \`${styles.webViewStyle}\`;
    document.head.appendChild(styleElement);
  `

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.webViewContainer}>
				<WebView
					injectedJavaScript={injectedJavaScript}
					source={{ html: content }}
				/>
			</View>
		</SafeAreaView>
	)
}

export default Blog
