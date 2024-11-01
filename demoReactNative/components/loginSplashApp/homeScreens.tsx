import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {

    return (
        <View style={Stylesheet.container}>
            <Text style={Stylesheet.text}>Home Screen</Text>
        </View>
    );

}

const Stylesheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    }
})

export default HomeScreen;