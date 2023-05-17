import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import AppContext from './contexts/MyContext.js'
import Home from './screens/Home'
import Blog from './screens/Blog'

const Stack = createStackNavigator()

export default function App() {
	return (
		<AppContext>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Notifications" component={Blog} />
				</Stack.Navigator>
			</NavigationContainer>
		</AppContext>
	)
}
