import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './splashScreens';
import LoginScreens from './loginScreen';
import TourScreen from './tourScreens';
import HomeScreen from './homeScreens';

const Stack = createStackNavigator();


const ImtiazAppLearning = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={LoginScreens} options={{ headerShown: false }} />
                <Stack.Screen name='Tour' component={TourScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ImtiazAppLearning;