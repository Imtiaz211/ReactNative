import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import ClassComponentReactNative from "../components/classComponentReactNative";
import UseEffectReactiveNative from "../components/useEffectReactNative";
import ShowHideReactNative from "../components/showHideReactNative";
import ResponsiveUI from "../components/responsiveUIReactNative";
import TouchableReactNative from "../components/touchableHighlightReactNative";
import RadioButtonReactNative from "../components/radioButtonReactNative";
import DynamicRadioButtonReactNative from "../components/dynamicRadioButtonReactNative";
import ActivityIndicatorReactNative from "../components/activityIndicatorReactNative";
import ModalReactNative from "../components/modalReactNative";
import PressableReactNative from "../components/pressableReactNative";
import StatusBarReaactNative from "../components/statusBarReactNative";
import PlatformReactNative from "../components/platformReactNative";
import NPMReactNative from "../components/npmReactNative";

class Home extends Component {
    render() {
        return (
            <View>

                <NPMReactNative />

                {/* <PlatformReactNative /> */}
                {/* <StatusBarReaactNative/> */}
                {/* <PressableReactNative/> */}
                {/* <ModalReactNative /> */}
                {/* <ActivityIndicatorReactNative /> */}
                {/* <DynamicRadioButtonReactNative/> */}
                {/* <RadioButtonReactNative/> */}
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
const Style = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    }
})
export default Home;