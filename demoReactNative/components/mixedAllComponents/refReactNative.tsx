import { Button, StyleSheet, TextInput, View } from "react-native"
import React, { useRef } from "react"

export const RefReactNative = () => {
    const input = useRef()
    const updateRef = () => {
        input.current.focus();
        input.current.setNativeProps({
            fontSize: 24,
            color: 'blue'
        })
    }

    return (
        <View>
            <TextInput
                ref={input}
                style={Styles.input}
                placeholder="Enter email id"
            />
            <TextInput
                style={Styles.input}
                placeholder="Enter password"
            />
            <View style={{ margin: 10 }}><Button title="Update ref" onPress={updateRef} /></View>
        </View>
    )
}
const Styles = StyleSheet.create({
    input: {
        borderColor: 'red',
        borderWidth: 1,
        margin: 10,
        padding: 10
    }
})