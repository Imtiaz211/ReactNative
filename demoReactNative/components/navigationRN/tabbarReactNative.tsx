import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export const TabbarReactNative = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name='SignUP' component={SignUP} />
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