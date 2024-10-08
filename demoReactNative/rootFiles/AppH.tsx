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
import { RefReactNative } from "../components/mixedAllComponents/refReactNative";
import { AsyncStorageReactNative } from "../components/asyncStorage/asyncStorageRN";
import { ReduxFileRN } from "../components/redux/rootFileRedux";
import { ProductWrapperRN } from "../components/redux/productWrapper";
import { ReactNativeCalendar } from "../components/calendarRN/reactNativeCalendar";


class AppH extends Component {
    render() {
        return (
            <ReactNativeCalendar/>
            // <ProductWrapperRN/>
            // <AsyncStorageReactNative/>
            // <RefReactNative/>
            // <SearchAPIReactNative/>
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