import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000); // 3 seconds delay
    }, [navigation]);

    return (<View style={styleSheet.container}>
        <Text style={styleSheet.text}> Splash Screen</Text>
    </View>
    )
}

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
    },

});

export default SplashScreen;