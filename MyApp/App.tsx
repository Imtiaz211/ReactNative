import React from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';





function App() {
  return (
  <View style={styles.container}>
    <Text style={styles.text}>Imtiaz Ahmad {'\n'} React Native Developers</Text>
    
    <TextInput style={styles.input}>
      placeholder="Enter your name"
      value= "Imtiaz Ahmad"
    </TextInput>

  <TextInput style={styles.input}>
      placeholder="Enter your password"
      value= "Password"
    </TextInput>

    
 <View style={styles.buttonContainer}>
        <Button title="Submit" />
      </View>


  </View>  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },

 input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
    marginTop: 20,
  },


  buttonContainer: {
    marginTop: 25,
  },


});

export default App;
