import {Button, Text, View} from 'react-native';

const PropsReactNative = (Props) => {
return (
    <View style = {{backgroundColor: 'blue', padding:5}}>
        <Text style={{fontSize:30}}>Name:{Props.argumens}</Text>
        <Text style={{fontSize:30}}>Age:{Props.age}</Text>
    </View>
)

}

export default PropsReactNative;