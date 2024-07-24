import { Component } from "react";
import { View, Text } from 'react-native'

import NavigationStackReactNative from "../components/navigationRN/navigationReactNative";
import { TabbarReactNative } from "../components/navigationRN/tabbarReactNative";
import { APICallReactNative } from "../components/apiCallReactNative/apiCallReactNative";
import { ListAPICallReactNative } from "../components/apiCallReactNative/listAPICallReactNative";
import { FlatListAPIRN } from "../components/apiCallReactNative/flatListAPICallRN";
import { CallJSONServer } from "../components/apiCallReactNative/callJSONServerRN";

class AppH extends Component {
    render() {
        return (
            <CallJSONServer/>
            // <FlatListAPIRN/>
            // <ListAPICallReactNative/>
            // <APICallReactNative />
            // <TabbarReactNative />
            // <NavigationStackReactNative/>
        )
    }
}
export default AppH