import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import ClassComponentReactNative from "./components/classComponentReactNative";
import UseEffectReactiveNative from "./components/useEffectReactNative";
import ShowHideReactNative from "./components/showHideReactNative";
import ResponsiveUI from "./components/responsiveUIReactNative";
import TouchableReactNative from "./components/touchableHighlightReactNative";
import RadioButtonReactNative from "./components/radioButtonReactNative";

class Home extends Component {
    render() {
        return (
           <View style={Style.mainS}>
            <RadioButtonReactNative/>
            {/* <TouchableReactNative/> */}
                {/* <ResponsiveUI /> */}
                {/*<ShowHideReactNative/>*/}
                {/*<UseEffectReactiveNative/>*/}
                {/*<ClassComponentReactNative/> 
                <Text style={{fontSize:30}}>This is Class component</Text> */}
            </View>
        )
    }
}

const Style=StyleSheet.create({
    mainS:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Home;