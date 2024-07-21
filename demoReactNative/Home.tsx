import { Component } from "react";
import { View, Text } from "react-native";
import ClassComponentReactNative from "./components/classComponentReactNative";

class Home extends Component {
    render() {
        return(
            <View>
                <ClassComponentReactNative/>
                <Text style={{fontSize:30}}>This is Class component</Text>
            </View>
        )
    }
}
export default Home;