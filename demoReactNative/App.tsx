import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const name = "Imtiaz Ahmad";
let age = 3;
var email = "imtiazahmad211@gmail.com"
function fruits() {
  return "Imtiaz Apple";
}


function App(): React.JSX.Element {

  return (
  <View>


  <Text style={{fontSize:30}}>{age === 36 ? "Above 30" : "Unknown age"}</Text>


    <Text style={{fontSize:30}}>{name}</Text>
    <Text style={{fontSize:30}}>{age}</Text>
    <Text style={{fontSize:30}}>{email}</Text>
    <Text style={{fontSize:30}}>{fruits()}</Text>

    <Text style={{fontSize:30}}>Imtiaz Ahmad, React Native</Text>
    <Text style={{fontSize:30}}>Like</Text>
    <Text style={{fontSize:30}}>Comment Native</Text>
    <Text style={{fontSize:30}}>subscribe</Text>
  </View>    
  );
}

export default App;
