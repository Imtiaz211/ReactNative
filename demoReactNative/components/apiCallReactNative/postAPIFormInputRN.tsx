import { useEffect, useState } from 'react'
import { View, Text, Button, TextInput, Settings, StyleSheet } from 'react-native'
export const POSTAPIRFormInpureactNative = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')


    const saveData = async () => {
        const url = "http://192.168.4.22:3000/user"
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name, age, email})    
        });
        
       let sresult = await result.json();
        if (sresult) {
            console.warn("Data saved")
        }
    }

    return (
        <View>
            <Text style={{ fontSize: 25 }}>Post API With form Input filed Data</Text>
            <TextInput
                placeholder='Enter your name'
                value={name}
                style={style.input}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                placeholder='Enter your age'
                value={age}
                style={style.input}
                onChangeText={(text) => setAge(text)}
            />
            <TextInput
                placeholder='Enter your email'
                value={email}
                style={style.input}
                onChangeText={(text) => setEmail(text)}
            />
            <Button title='Save Data' onPress={saveData}
            />
        </View>
    )
}
const style = StyleSheet.create({
    input: {
        borderColor: 'red',
        borderWidth: 1,
        margin: 20,
        fontSize:18
    }
})