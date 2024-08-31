import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
const FormInputReactNative = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [display, setDisplay] = useState(false);

    const clearUserDetails = () => {
        setName("");
        setPassword("");
        setEmail("");
        setDisplay(false);
    }
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Simple form React Native</Text>

            <TextInput
                style={Style.textInput}
                placeholder='Enter your name'
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <TextInput
                style={Style.textInput}
                placeholder='Enter your password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />

            <TextInput
                style={Style.textInput}
                placeholder='Enter your email'
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <View style={{ marginBottom: 10 }}>
                <Button
                    title='Get user Details'
                    onPress={() => setDisplay(true)}
                />
            </View>
            <Button
                title='Clear User Details'
                onPress={clearUserDetails}
            />

            <View>
                {
                    display ?
                        <View>
                            <Text style={{ fontSize: 20 }}>User name: {name}</Text>
                            <Text style={{ fontSize: 20 }}>User password: {password}</Text>
                            <Text style={{ fontSize: 20 }}>User email: {email}</Text>
                        </View>
                        : null
                }
            </View>

        </View>
    )
}

const Style = StyleSheet.create({
    textInput: {
        color: 'blue',
        fontSize: 30,
        borderColor: 'black',
        borderWidth: 5,
        margin: 10
    }
})
export default FormInputReactNative;