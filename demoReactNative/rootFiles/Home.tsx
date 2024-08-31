import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import ClassComponentReactNative from "../components/mixedAllComponents/classComponentReactNative";
import UseEffectReactiveNative from "../components/mixedAllComponents/useEffectReactNative";
import ShowHideReactNative from "../components/mixedAllComponents/showHideReactNative";
import ResponsiveUI from "../components/mixedAllComponents/responsiveUIReactNative";
import TouchableReactNative from "../components/mixedAllComponents/touchableHighlightReactNative";
import RadioButtonReactNative from "../components/mixedAllComponents/radioButtonReactNative";
import DynamicRadioButtonReactNative from "../components/mixedAllComponents/dynamicRadioButtonReactNative";
import ActivityIndicatorReactNative from "../components/mixedAllComponents/activityIndicatorReactNative";
import ModalReactNative from "../components/mixedAllComponents/modalReactNative";
import PressableReactNative from "../components/mixedAllComponents/pressableReactNative";
import StatusBarReaactNative from "../components/mixedAllComponents/statusBarReactNative";
import PlatformReactNative from "../components/mixedAllComponents/platformReactNative";
import NPMReactNative from "../components/mixedAllComponents/npmReactNative";

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