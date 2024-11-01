import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const TourScreen = ({ navigation }) => {

    return (
        <View style={Stylesheet.container}>
            <Text style={Stylesheet.text}>Tour Screen</Text>
            <Button title="Finish Tour" onPress={() => navigation.replace('Home')} />
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

export default TourScreen;