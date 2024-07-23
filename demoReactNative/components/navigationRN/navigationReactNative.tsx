import { Text, Button, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const NavigationStackReactNative = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                   headerStyle: {
                       backgroundColor: 'blue'
                   },
                   headerTintColor:'orange',
                   headerTitleStyle:{
                       fontSize:25
                   }
            }}>
                <Stack.Screen name='Login' component={Login}
                    options={{
                        title: 'User Login',
                        headerStyle: {
                            backgroundColor: 'blue'
                        },
                        headerTintColor:'orange',
                        headerTitleStyle:{
                            fontSize:25
                        }
                    }}
                />
                <Stack.Screen name='Home' component={Home} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Home Screen 1</Text>
        </View>
    )
}

const Login = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Login Screen</Text>
            <Button title='Go to home page' onPress={() => props.navigation.navigate('Home')} />
        </View>
    )

}
export default NavigationStackReactNative