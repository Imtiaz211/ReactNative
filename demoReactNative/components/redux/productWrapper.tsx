import { NavigationContainer } from '@react-navigation/native'
import {} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ReduxFileRN } from './rootFileRedux'
import { UserListReactNative } from './userListReactNative'

const Stack = createNativeStackNavigator()

export const ProductWrapperRN = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ReduxFileRN}/>
                <Stack.Screen name="Listscreen" component={UserListReactNative}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}