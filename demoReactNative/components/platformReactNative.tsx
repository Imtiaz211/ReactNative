import {View, Text,Platform, StyleSheet, ScrollView} from "react-native"
const PlatformReactNative = () => {
    const osType = Platform.OS
    return(
        <View>
            <ScrollView> 
            {
                Platform.OS == 'android'? <View style={{backgroundColor:'red', height:100,width:100}}></View> : <View style={{backgroundColor:'red', height:100,width:100}}></View>
            }
            <Text style={Style.textStyle}>Platform Checks</Text>
            <Text style={Style.textStyle}>{JSON.stringify(Platform)}</Text>
            <Text style={Style.textStyle}>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text>
            </ScrollView>
        </View>
    )
}
const Style=StyleSheet.create({
    textStyle: {
        fontSize:25,
        color:'red',

        ...Platform.select({
            ios:{
                padding:10
            },
            android:{
                padding:20,
            }
        })
        

    }
})
export default PlatformReactNative 