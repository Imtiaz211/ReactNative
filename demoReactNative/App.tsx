{/* useState for learning */}

import React, {useState} from 'react';
import VariableAndFunction from './components/firstVariableFunctions';
import ReactNativeButtons from './components/buttonsReactNative';
import ReactNativeState from './components/reactNativeState';
import PropsReactNative from './components/propsReactNative';

import {
  Button,
  Text,
  View,
} from 'react-native';
import UserData from './components/userData';

function App(): React.JSX.Element {

const [argumens, setArguments] = useState("Ahmad");
  return (
     <View>
      <Text style={{fontSize:30}}>Props in React JS by Imtiaz Ahmad</Text>
      <Button title='Press Me' onPress={()=> setArguments("A")}/>
      <PropsReactNative argumens = {argumens} />
      {/*<ReactNativeState/> */}
      {/*<ReactNativeButtons/> */}
      {/*<VariableAndFunction/> */}
     </View>
  );
}

export default App;
