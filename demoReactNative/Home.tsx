import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import ClassComponentReactNative from "./components/classComponentReactNative";
import UseEffectReactiveNative from "./components/useEffectReactNative";
import ShowHideReactNative from "./components/showHideReactNative";
import ResponsiveUI from "./components/responsiveUIReactNative";
import TouchableReactNative from "./components/touchableHighlightReactNative";

class Home extends Component {
    render() {
        return (
           <View>
            <TouchableReactNative/>
                {/* <ResponsiveUI /> */}
                {/*<ShowHideReactNative/>*/}
                {/*<UseEffectReactiveNative/>*/}
                {/*<ClassComponentReactNative/> 
                <Text style={{fontSize:30}}>This is Class component</Text> */}
            </View>
        )
    }
}

export default Home;