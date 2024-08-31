import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const TextInputReactNative = () => {
    const [name, setName] = useState("")
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Handle Text Input</Text>
            <Text style={{ fontSize: 30 }}>Your name is: {name}</Text>
            <TextInput
                style={style.textInput}
                placeholder='Enter your name'
                value= {name}
                onChangeText={(value) => setName(value)}
            />
            <Button title='Clear text value' onPress={()=> setName("")}/>
        </View>
    )
}


const style = StyleSheet.create({
    textInput: {
        fontSize: 18,
        color: 'red',
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10
    }
})

export default TextInputReactNative;