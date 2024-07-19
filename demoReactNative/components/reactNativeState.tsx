import { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ReactNativeState = () => {

    const [name, setName] = useState("Imtiaz");

    function setStateName() {
        setName("Ahmad")
    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>State of React Native</Text>
            <Button title='Press Me' onPress={setStateName}/>

        </View>
    )
}

export default ReactNativeState;