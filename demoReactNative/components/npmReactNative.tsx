import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
const NPMReactNative = () => {
    // return (
        // <WebView source={{ uri: "https://reactnative.dev/"}}/>
        // <WebView source={{uri:"https://reactnative.dev/"}}>
              return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />;

    // )
}
export default NPMReactNative