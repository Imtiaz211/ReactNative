{/* useState for learning */ }

import React, { useState } from 'react';
import VariableAndFunction from '../components/mixedAllComponents/firstVariableFunctions';
import ReactNativeButtons from '../components/mixedAllComponents/buttonsReactNative';
import ReactNativeState from '../components/mixedAllComponents/reactNativeState';
import PropsReactNative from '../components/mixedAllComponents/propsReactNative';
import BasicStyleReactNative from '../components/mixedAllComponents/basicStyleReactNative';
import { ExStyle } from '../components/mixedAllComponents/externalStyleReactNative';
import TextInputReactNative from '../components/mixedAllComponents/textInputReactNative';
import FormInputReactNative from '../components/mixedAllComponents/formInputReactNative';
import ListArrayReactNative from '../components/mixedAllComponents/listOfArrayReactNative';

import { Button, Text, View } from 'react-native';

import UserData from '../components/mixedAllComponents/userData';
import ListMapFunction from '../components/mixedAllComponents/listWithMapReactNative';
import GridReactNative from '../components/mixedAllComponents/gridReactNative';
import LoopComponentReactNative from '../components/mixedAllComponents/componentLoopReactNative';
import SectionListReactNative from '../components/mixedAllComponents/sectionListReactNative';
import ClassComponentReactNative from '../components/mixedAllComponents/classComponentReactNative';

function App(): React.JSX.Element {

  const [argumens, setArguments] = useState("Imtiaz");
  return (
    <View>

      <ClassComponentReactNative />
      {/*<SectionListReactNative /> */}

      {/*<LoopComponentReactNative />*/}

      {/*<GridReactNative/> */}

      {/*<ListMapFunction/> */}

      {/*<ListArrayReactNative /> */}

      {/*<FormInputReactNative />*/}

      {/*<TextInputReactNative /> */}

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
