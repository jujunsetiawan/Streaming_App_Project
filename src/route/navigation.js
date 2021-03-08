import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/splash/splash'
import Dashboard from '../screens/dashboard/dashboard'
import Detail from '../screens/Detail/detail'

const Stack = createStackNavigator()

class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
                    <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigation
