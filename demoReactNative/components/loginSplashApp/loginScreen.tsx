import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const LoginScreens = ({ navigation }) => {

    return (
        <View style={Stylesheet.container}>
            <Text style={Stylesheet.text}>Login Screen</Text>
            <Button title="Login" onPress={() => navigation.replace('Tour')} />
        </View>
    )
}

const Stylesheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default LoginScreens;