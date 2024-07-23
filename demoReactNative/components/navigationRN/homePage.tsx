import {View,Text} from 'react-native'
export const Home = (props) => {
    console.warn(props.route.params)
    const {name, age} =props.route.params
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Home Screen 1</Text>

            <Text style={{ fontSize: 30 }}>Name:{name}</Text>
            <Text style={{ fontSize: 30 }}>Age:{age}</Text>

            {/* <Text style={{ fontSize: 30 }}>Name:{props.route.params.name}</Text>
            <Text style={{ fontSize: 30 }}>Age:{props.route.params.age}</Text> */}
        </View>
    )
}