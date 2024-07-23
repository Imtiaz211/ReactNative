/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import Home from './rootFiles/Home';
import WebviewHome from './rootFiles/WebviewHome';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WebviewHome);
