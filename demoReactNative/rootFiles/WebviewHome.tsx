import React from 'react'
import { Text } from 'react-native'
import { WebView } from 'react-native-webview'
const WebviewHome = () => {
    return (
        
        <WebView source={{ uri: "https://reactnative.dev/" }} />
    )
}
export default WebviewHome