import { Component } from "react";
import { View, Text } from 'react-native'

import NavigationStackReactNative from "../components/navigationRN/navigationReactNative";
import { TabbarReactNative } from "../components/navigationRN/tabbarReactNative";

class AppH extends Component {
    render() {
        return (
            <TabbarReactNative />
            // <NavigationStackReactNative/>
        )
    }
}
export default AppH