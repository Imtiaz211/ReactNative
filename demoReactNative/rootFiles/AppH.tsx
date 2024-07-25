import { Component } from "react";
import { View, Text } from 'react-native'

import NavigationStackReactNative from "../components/navigationRN/navigationReactNative";
import { TabbarReactNative } from "../components/navigationRN/tabbarReactNative";
import { APICallReactNative } from "../components/apiCallReactNative/apiCallReactNative";
import { ListAPICallReactNative } from "../components/apiCallReactNative/listAPICallReactNative";
import { FlatListAPIRN } from "../components/apiCallReactNative/flatListAPICallRN";
import { CallJSONServer } from "../components/apiCallReactNative/callJSONServerRN";
import { POSTAPIReactNative } from "../components/apiCallReactNative/postStaticAPICallRN";
import { POSTAPIRFormInpureactNative } from "../components/apiCallReactNative/postAPIFormInputRN";
import { ListAPIData } from "../components/apiCallReactNative/listAPIDataRN";
import { SearchAPIReactNative } from "../components/searchRN/searchAPIReactNative";


class AppH extends Component {
    render() {
        return (
            <SearchAPIReactNative/>
            // <ListAPIData/>
            // <POSTAPIRFormInpureactNative/>
            // <POSTAPIReactNative/>
            // <CallJSONServer/>
            // <FlatListAPIRN/>
            // <ListAPICallReactNative/>
            // <APICallReactNative />
            // <TabbarReactNative />
            // <NavigationStackReactNative/>
        )
    }
}
export default AppH