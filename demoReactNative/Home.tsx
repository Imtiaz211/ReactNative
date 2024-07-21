import { Component } from "react";
import { View, Text } from "react-native";

import ClassComponentReactNative from "./components/classComponentReactNative";
import UseEffectReactiveNative from "./components/useEffectReactNative";

class Home extends Component {
    render() {
        return(
            <View>
                <UseEffectReactiveNative/>


                {/*<ClassComponentReactNative/> 
                <Text style={{fontSize:30}}>This is Class component</Text> */}
            </View>
        )
    }
}
export default Home;