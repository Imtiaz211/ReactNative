import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export const BackgroundImageLearning = () => {

    const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

    return (
        <View>
            <Text style={StyleSheetBackground.text}>Imtiaz Ahmad Ansari village imadpur post matiyar, Saran Bihar</Text>
            <ImageBackground source={image}
                style={StyleSheetBackground.background}
                resizeMode="cover"
            >
                <Text style={StyleSheetBackground.text}>Hello I am Imtiaz Ahmad</Text>
            </ImageBackground>
        </View>
    )
}


const StyleSheetBackground = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center'

    },
    text: {
        color: 'green',
        fontSize: 42,
        // lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center'

    }
})