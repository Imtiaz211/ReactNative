import React from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import appStyle from './src/Utils/TextStyle/textStyle';

const App:React.FC = () =>{
  return (
  <View style={appStyle.container}>
    <Text style={appStyle.text}>Imtiaz Ahmad {'\n'} React Native Developers</Text>
    
    <TextInput style={appStyle.input}>
      placeholder="Enter your name"
      value= "Imtiaz Ahmad"
    </TextInput>

  <TextInput style={appStyle.input}>
      placeholder="Enter your password"
      value= "Password"
    </TextInput>

    
 <View style={appStyle.buttonContainer}>
        <Button title="Submit" />
      </View>


  </View>  
  );
}

export default App;
