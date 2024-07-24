import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' // This is for Botton
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs' // This is for Top

// const Tab = createBottomTabNavigator()
const Tab = createMaterialTopTabNavigator()

export const TabbarReactNative = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name='Signup' component={SignUP} />
                <Tab.Screen name='Other' component={SignUP} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const Login = () => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30}}>Login</Text>
        </View>
    )
}
const SignUP = () => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30}}>Signup</Text>
        </View>
    )
}