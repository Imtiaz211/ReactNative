import { Component } from "react";
import { View, Text } from 'react-native'

import NavigationStackReactNative from "../components/navigationRN/navigationReactNative";
import { TabbarReactNative } from "../components/navigationRN/tabbarReactNative";
import { APICallReactNative } from "../components/apiCallReactNative/apiCallReactNative";

class AppH extends Component {
    render() {
        return (
            <APICallReactNative />
            // <TabbarReactNative />
            // <NavigationStackReactNative/>
        )
    }
}
export default AppH