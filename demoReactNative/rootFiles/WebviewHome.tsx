import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomModalReactNative from '../components/customModalReactNative'
const WebviewHome = () => {
    return (
        <View style={Styles.container}>
            <CustomModalReactNative />
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgba(50,50,50,.5)',
        justifyContent: 'center'
    }
})
export default WebviewHome