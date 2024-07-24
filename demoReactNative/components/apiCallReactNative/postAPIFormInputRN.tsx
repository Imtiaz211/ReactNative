import { useEffect, useState } from 'react'
import { View, Text, Button, TextInput, Settings, StyleSheet } from 'react-native'
export const POSTAPIRFormInpureactNative = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')

    // State 
    const [nameError, setNameError] = useState(false)
    const [ageError, setAgeError] = useState(false)
    const [emailError, setEmailError] = useState(false)



    const saveData = async () => {
        // !name,!age,!email == checks empty, undefined and null

        setNameError( name ? false : true)
        setAgeError(age ? false : true)
        setEmailError(email ? false : true)

        if (!name || !email || !age) {
            return false
        }

        const url = "http://192.168.4.22:3000/user"
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, age, email })
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
            {
                nameError ? <Text style={style.errorText}>Please enter a valid Name</Text> : null
            }
            <TextInput
                placeholder='Enter your age'
                value={age}
                style={style.input}
                onChangeText={(text) => setAge(text)}
            />
            {
                ageError ? <Text style={style.errorText}>Please enter a valid Age</Text> : null
            }
            <TextInput
                placeholder='Enter your email'
                value={email}
                style={style.input}
                onChangeText={(text) => setEmail(text)}
            />
            {
                emailError ? <Text style={style.errorText}>Please enter a valid email</Text> : null
            }
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
        fontSize: 18,
        padding: 10,
        marginBottom: 5
    },
    errorText: {
        color: 'red',
        fontSize: 17,
        marginLeft: 20
    }
})