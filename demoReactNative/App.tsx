{/* useState for learning */}

import React, {useState} from 'react';
import VariableAndFunction from './components/firstVariableFunctions';
import ReactNativeButtons from './components/buttonsReactNative';
import ReactNativeState from './components/reactNativeState';

import {
  Text,
  View,
} from 'react-native';
import UserData from './components/userData';

function App(): React.JSX.Element {

  return (
     <View>
      <ReactNativeState/>
      {/*<ReactNativeButtons/> */}
      {/*<VariableAndFunction/> */}
     </View>
  );
}

export default App;
