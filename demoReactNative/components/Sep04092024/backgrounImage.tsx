import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export const BackgroundImageLearning = () => {
    return (
        <View>
            <Text>Imtiaz Ahmad</Text>
            <ImageBackground source={{ uri: "https://as1.ftcdn.net/v2/jpg/07/26/65/90/1000_F_726659088_uiT5iJX79jQYcuKAmTvaO4RuMqEaDYxC.jpg"}}
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
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center'

    }
})