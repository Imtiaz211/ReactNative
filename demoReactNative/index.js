/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import Home from './rootFiles/Home';
//import WebviewHome from './rootFiles/WebviewHome';
// import AppH from './rootFiles/AppH'
import HomeLearning from './rootFiles/HomeLearning';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './components/redux/storeReducerRN';
const AppRedux = () => (
    <Provider store={store}>
        {/* <AppH/> */}
        <HomeLearning/>
    </Provider>
)
// AppRegistry.registerComponent(appName, () => AppH);
AppRegistry.registerComponent(appName, () => AppRedux);
