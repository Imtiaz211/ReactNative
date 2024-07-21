import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import ClassComponentReactNative from "./components/classComponentReactNative";
import UseEffectReactiveNative from "./components/useEffectReactNative";
import ShowHideReactNative from "./components/showHideReactNative";
import ResponsiveUI from "./components/responsiveUIReactNative";

class Home extends Component {
    render() {
        return (
            <View style={Style.main}>
                <View style={Style.Box1}>
                    <View style={Style.InnerBox1}></View>
                    <View style={Style.InnerBox2}></View>
                    <View style={Style.InnerBox3}></View>
                </View>
                <View style={Style.Box2}></View>
                <View style={Style.Box3}></View>
                {/* <ResponsiveUI /> */}
                {/*<ShowHideReactNative/>*/}
                {/*<UseEffectReactiveNative/>*/}
                {/*<ClassComponentReactNative/> 
                <Text style={{fontSize:30}}>This is Class component</Text> */}
            </View>
        )
    }
}

const Style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'red'
    },
    Box1: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'row'
    },
    Box2: {
        flex: 1,
        backgroundColor: 'green'
    },
    Box3: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    InnerBox1: {
        flex: 1,
        backgroundColor: 'skyblue',
        margin: 10
    },
    InnerBox2: {
        flex: 1,
        backgroundColor: 'skyblue',
        margin: 10
    },
    InnerBox3: {
        flex: 1,
        backgroundColor: 'skyblue',
        margin: 10
    }


})

export default Home;