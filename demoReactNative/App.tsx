{/* useState for learning */ }

import React, { useState } from 'react';
import VariableAndFunction from './components/firstVariableFunctions';
import ReactNativeButtons from './components/buttonsReactNative';
import ReactNativeState from './components/reactNativeState';
import PropsReactNative from './components/propsReactNative';
import BasicStyleReactNative from './components/basicStyleReactNative';
import { ExStyle } from './components/externalStyleReactNative';
import TextInputReactNative from './components/textInputReactNative';

import {
  Button,
  Text,
  View,
} from 'react-native';
import UserData from './components/userData';

function App(): React.JSX.Element {

  const [argumens, setArguments] = useState("Imtiaz");
  return (
    <View>

      <TextInputReactNative />

      {/* we can add array of style [ExStyle.textBox, style] 

      <Text style = {ExStyle.textBox}>Imtiaz Ansari</Text>

      <BasicStyleReactNative /> */}
      {/*   <Text style={{fontSize:30}}>Props in React JS by Imtiaz Ahmad</Text>
      <Button title='Press Me' onPress={()=> setArguments("Ahmad")}/>
      <PropsReactNative argumens = {argumens} age = {36} /> */}
      {/*<ReactNativeState/> */}
      {/*<ReactNativeButtons/> */}
      {/*<VariableAndFunction/> */}
    </View>
  );
}

export default App;
