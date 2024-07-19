import {Button, Text, View} from 'react-native';

const PropsReactNative = (Props) => {
return (
    <View style = {{backgroundColor: 'blue', padding:5}}>
        <Text style={{fontSize:30}}>{Props.argumens}</Text>
    </View>
)

}

export default PropsReactNative;