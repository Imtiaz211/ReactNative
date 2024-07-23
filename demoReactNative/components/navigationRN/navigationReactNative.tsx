import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './loginPage'
import { Home } from './homePage'
import { HeaderLeftRN } from './headerLeft'
import { HeaderRightRN } from './headerRight'


const Stack = createNativeStackNavigator()

const NavigationStackReactNative = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: 'blue'
                },
                headerTintColor: 'orange',
                headerTitleStyle: {
                    fontSize: 25
                }
            }}>
                <Stack.Screen name='Login' component={Login}
                    options={{
                        title: 'User Login',
                        headerLeft: () => <HeaderLeftRN />,
                        headerRight: () => <HeaderRightRN />,
                        headerStyle: {
                            backgroundColor: 'blue'
                        },
                        headerTintColor: 'orange',
                        headerTitleStyle: {
                            fontSize: 25
                        }
                    }}
                />
                <Stack.Screen name='Home' component={Home} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default NavigationStackReactNative