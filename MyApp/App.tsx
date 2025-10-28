import *  as React from 'react';
import { View } from 'react-native';
import appStyle from './src/Utils/TextStyle/textStyle';
import LoginScreen from './src/Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';

import { enableScreens } from 'react-native-screens';
enableScreens();


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={appStyle.container}>
   {/*  <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
     */}
     <LoginScreen/>
    </View> 
  );
};

export default App;